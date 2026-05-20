---
layout: page
title: Image Classification & Retrieval with CLIP
description: Zero-shot image classification and text-to-image retrieval using OpenAI's CLIP model, leveraging contrastive image-text embeddings for cross-modal similarity matching.
img: assets/img/clip.png
importance: 1
category: AI
github: https://github.com/linsome/clip
---

This project explores two core capabilities of **CLIP (Contrastive Language–Image Pretraining)**: zero-shot image classification and text-driven image retrieval — both powered by the model's joint image-text embedding space.

## Task 1: Zero-Shot Image Classification

CLIP classifies images without task-specific training by computing similarity scores between an image and a set of natural language prompts. The core pipeline:

```python
inputs = processor(
    text=["a photo of a cat", "a photo of a dog"],
    images=image,
    return_tensors="pt",
    padding=True
).to(model.device)

outputs = model(**inputs)
logits_per_image = outputs.logits_per_image  # image-text similarity score
probs = logits_per_image.softmax(dim=1)       # convert to label probabilities
```

By applying softmax over the similarity logits, the model produces a probability distribution across candidate labels — the label with the highest probability is selected as the predicted class.

## Task 2: Evaluation on a Custom Dataset

For systematic evaluation, we loaded a fine-tuned CLIP checkpoint and ran inference across a labeled dataset:

```python
model = CLIPModel.from_pretrained(model_dir).to(device)
processor = CLIPProcessor.from_pretrained(model_dir)

inputs = processor(text=prompts, images=image, return_tensors="pt", padding=True).to(model.device)
outputs = model(**inputs)
logits_per_image = outputs.logits_per_image
probs = logits_per_image.softmax(dim=1)
```

Image-label pairings were pre-constructed in `dataset.py`. The evaluation loop computes top-1 accuracy by comparing each predicted label against the ground truth.

## Task 3: Text-to-Image Retrieval

Given a natural language query, the retrieval system ranks a gallery of images by their cosine similarity to the query embedding:

```python
def search(query, image_paths, image_embeddings, model, processor, device, top_k=5):
    model.eval()
    with torch.no_grad():
        inputs = processor(text=[query], return_tensors='pt', padding=True).to(device)
        text_output = model.get_text_features(**inputs)
        text_embedding = text_output.pooler_output
        text_embedding = F.normalize(text_embedding, dim=1)
        scores = (image_embeddings.to(device) @ text_embedding.T).squeeze(1)
```

The similarity score between a text embedding $$A$$ and image embedding $$B$$ is computed as:

$$\text{Similarity} = A \cdot B^T$$

Since both embeddings are L2-normalized via `F.normalize`, this dot product is equivalent to cosine similarity. The top-$$k$$ images with the highest scores are returned as results.

## Key Takeaway

CLIP's shared embedding space enables both classification and retrieval without task-specific fine-tuning. By representing images and text in the same vector space, cross-modal matching reduces to a simple dot product — making it both elegant and highly scalable.

**Course:** ECS 189G · Spring 2026