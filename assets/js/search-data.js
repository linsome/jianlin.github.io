// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "ABOUT",
    section: "Navigation",
    handler: () => {
      window.location.href = "/jianlin.github.io/";
    },
  },{id: "nav-blog",
          title: "BLOG",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/jianlin.github.io/blog/";
          },
        },{id: "nav-projects",
          title: "PROJECTS",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/jianlin.github.io/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/jianlin.github.io/cv/";
          },
        },{id: "post-rolled-my-own-em-algorithm-for-gaussian-mixture-models",
        
          title: "Rolled My Own EM Algorithm for Gaussian Mixture Models",
        
        description: "Implementing GMM from scratch reminded me of the mathematical elegance behind classical statistical models — and why EM algorithm is an optimization masterpiece.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/jianlin.github.io/machine-learning/2026/05/16/GMM.html";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/jianlin.github.io/books/the_godfather.html";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/jianlin.github.io/news/announcement_2.html";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-does-classroom-size-affect-academic-achievement",
          title: 'Does Classroom Size Affect Academic Achievement?',
          description: "A multilevel statistical analysis of Tennessee&#39;s Project STAR dataset, examining the causal effect of small class sizes on student SAT performance across kindergarten through 3rd grade.",
          section: "Projects",handler: () => {
              window.location.href = "/jianlin.github.io/projects/207-project.html";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/jianlin.github.io/projects/7_project.html";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/jianlin.github.io/projects/8_project.html";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/jianlin.github.io/projects/9_project.html";
            },},{id: "projects-app-version-update-user-analysis",
          title: 'App Version Update — User Analysis',
          description: "A multi-stage statistical analysis of a mobile app version update (S14) across four global markets, examining behavioral shifts, revenue attribution, and user retention.",
          section: "Projects",handler: () => {
              window.location.href = "/jianlin.github.io/projects/App%20Version%20Update%20Analysis.html";
            },},{id: "projects-austin-airbnb-price-amp-crime-rate-correlation",
          title: 'Austin Airbnb Price &amp;amp; Crime Rate Correlation',
          description: "Analyzing Airbnb listing price distributions in Austin, TX, predicting price determinants, and exploring the relationship between neighborhood crime rates and listing prices.",
          section: "Projects",handler: () => {
              window.location.href = "/jianlin.github.io/projects/Austin%20Airbnb%20Price%20.html";
            },},{id: "projects-prompting-with-in-context-learning",
          title: 'Prompting with In-Context Learning',
          description: "Explore the power and limitations of In-Context Learning (ICL) with Large Language Models for sentiment analysis.",
          section: "Projects",handler: () => {
              window.location.href = "/jianlin.github.io/projects/In_context_prompt.html";
            },},{id: "projects-decoder-only-shakespeare-words-generator",
          title: 'Decoder-only, Shakespeare words generator',
          description: "We build, train, and evaluate a minimal decoder-only Transformer from scratch using PyTorch. We will train this model on the Tiny Shakespeare dataset to generate Shakespeare-like text.",
          section: "Projects",handler: () => {
              window.location.href = "/jianlin.github.io/projects/Training-and-Probing-a-Tiny-Transformer.html";
            },},{id: "projects-text-to-sql-generator-via-qlora-fine-tuning",
          title: 'Text-to-SQL Generator via QLoRA Fine-Tuning',
          description: "Fine-tuning Qwen2.5-7B-Instruct with QLoRA to generate clean, executable SQL from natural language queries, achieving dramatic parameter efficiency with fewer than 1% trainable parameters.",
          section: "Projects",handler: () => {
              window.location.href = "/jianlin.github.io/projects/text-sql-LoRA.html";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/jianlin.github.io/teachings/data-science-fundamentals.html";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/jianlin.github.io/teachings/introduction-to-machine-learning.html";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/jianlin.github.io/assets/pdf/example_pdf.pdf", "_blank");
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
