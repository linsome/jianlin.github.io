// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "ABOUT",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "BLOG",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "PROJECTS",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-reinforcement-learning-from-reward-penalty-rules-to-q-learning",
        
          title: "Reinforcement Learning — From Reward-Penalty Rules to Q-Learning",
        
        description: "A structured walkthrough of core RL concepts, from the reward-penalty weight update rule to Temporal Difference learning, SARSA, and Q-learning.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/machine-learning/2026/05/28/Refincorment_Learning.html";
          
        },
      },{id: "post-unsupervised-learning-neural-networks-vs-classical-machine-learning",
        
          title: "Unsupervised Learning — Neural Networks vs. Classical Machine Learning",
        
        description: "A comparative review of unsupervised learning techniques across neural network and classical ML perspectives, from PCA and SOM to Autoencoders and Diffusion Models.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/machine-learning/2026/05/25/Unsupervise.html";
          
        },
      },{id: "post-supervised-recurrent-networks-and-the-gru-to-vanishing-gradients",
        
          title: "Supervised Recurrent Networks and the GRU to Vanishing Gradients",
        
        description: "A deep dive into how Recurrent Neural Networks handle sequential data",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/machine-learning/2026/05/20/Recurrent.html";
          
        },
      },{id: "post-em-algorithm-for-gaussian-mixture-models",
        
          title: "EM Algorithm for Gaussian Mixture Models",
        
        description: "Implementing GMM from scratch reminded me of the mathematical elegance behind classical statistical models — and why EM algorithm is an optimization masterpiece.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/machine-learning/2026/05/16/GMM.html";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2.html";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-does-classroom-size-affect-academic-achievement",
          title: 'Does Classroom Size Affect Academic Achievement?',
          description: "A multilevel statistical analysis of Tennessee&#39;s Project STAR dataset, examining the causal effect of small class sizes on student SAT performance across kindergarten through 3rd grade.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/207-project.html";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{id: "projects-app-version-update-user-analysis",
          title: 'App Version Update — User Analysis',
          description: "A multi-stage statistical analysis of a mobile app version update (S14) across four global markets, examining behavioral shifts, revenue attribution, and user retention.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/App%20Version%20Update%20Analysis.html";
            },},{id: "projects-austin-airbnb-price-amp-crime-rate-correlation",
          title: 'Austin Airbnb Price &amp;amp; Crime Rate Correlation',
          description: "Analyzing Airbnb listing price distributions in Austin, TX, predicting price determinants, and exploring the relationship between neighborhood crime rates and listing prices.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Austin%20Airbnb%20Price%20.html";
            },},{id: "projects-prompting-with-in-context-learning",
          title: 'Prompting with In-Context Learning',
          description: "Explore the power and limitations of In-Context Learning (ICL) with Large Language Models for sentiment analysis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/In_context_prompt.html";
            },},{id: "projects-teaching-a-small-model-to-write-flutter-ui-code-with-rl",
          title: 'Teaching a Small Model to Write Flutter UI Code with RL',
          description: "A pipeline using GRPO + CLIP rewards to improve screenshot-to-Flutter code generation with Qwen3-VL-8B, trained on a single A100 for under $50.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Reinforcement-learning-Flutter.html";
            },},{id: "projects-decoder-only-shakespeare-words-generator",
          title: 'Decoder-only, Shakespeare words generator',
          description: "We build, train, and evaluate a minimal decoder-only Transformer from scratch using PyTorch. We will train this model on the Tiny Shakespeare dataset to generate Shakespeare-like text.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Training-and-Probing-a-Tiny-Transformer.html";
            },},{id: "projects-image-classification-amp-retrieval-with-clip",
          title: 'Image Classification &amp;amp; Retrieval with CLIP',
          description: "Zero-shot image classification and text-to-image retrieval using OpenAI&#39;s CLIP model, leveraging contrastive image-text embeddings for cross-modal similarity matching.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/clip.html";
            },},{id: "projects-text-to-sql-generator-via-qlora-fine-tuning",
          title: 'Text-to-SQL Generator via QLoRA Fine-Tuning',
          description: "Fine-tuning Qwen2.5-7B-Instruct with QLoRA to generate clean, executable SQL from natural language queries, achieving dramatic parameter efficiency with fewer than 1% trainable parameters.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/text-sql-LoRA.html";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals.html";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning.html";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%78%78%6C%69%6E@%75%63%64%61%76%69%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jian-lin-ab588315b", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
