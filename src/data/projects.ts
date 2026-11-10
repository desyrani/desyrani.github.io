import type { ProjectCard } from "../types";

export const featuredProjects: ProjectCard[] = [
  {
    image: "/detail/smartbin.jpg",
    alt: "Smart-Bin waste segregation project",
    title: "Smart-Bin: Intelligent Waste Segregation",
    description:
      "Final year project: an intelligent waste segregation system that classifies waste as recyclable or non-recyclable. Compared CNN and zero-shot learning (ZSL) approaches, then implemented the CNN as the better fit, reaching 96% accuracy and outperforming traditional methods. Published at IC-ITECHS, 2024.",
    tags: ["Computer Vision", "CNN", "Zero-Shot Learning", "Deep Learning"],
    buttons: [
      { label: "CNN Code", href: "https://github.com/desyrani/project-FYP-smartbin-using-CNN-architectures" },
      { label: "ZSL Code", href: "https://github.com/desyrani/project-FYP-smartbin-using-ZSL-architectures" },
    ],
  },
  {
    image: "/detail/misdiagnosis.jpg",
    alt: "EEG psychiatric misdiagnosis project",
    title: "Reducing Psychiatric Misdiagnosis with EEG",
    description:
      "Compared CatBoost and LightGBM on EEG data to predict psychiatric disorders more accurately, aiming to reduce misdiagnosis and the improper treatment it leads to. Published in the Journal of Data Analytics, Information, and Computer Science, 2024.",
    tags: ["Machine Learning", "EEG", "CatBoost", "LightGBM"],
    buttons: [
      { label: "Code", href: "https://github.com/desyrani/project-paper-ML-misdiagnosis-reduction-in-psychiatric-disorder-with-EEG" },
    ],
  },
  {
    image: "/detail/spam news detection1.jpg",
    alt: "Spam detection and news classification project",
    title: "Spam Detection & News Article Classification",
    description:
      "Built NLP models to detect spam in email and SMS and to classify news articles into topics such as sports, politics, and technology. Compared Naive Bayes, SVM, Random Forest, Logistic Regression, and neural networks on TF-IDF and Word2Vec features, evaluated with precision, recall, and F1-score.",
    tags: ["NLP", "Text Classification", "TF-IDF", "Word2Vec"],
    buttons: [
      { label: "Code", href: "https://github.com/desyrani/project-NLP-spam-detection-newsarticle-classification" },
    ],
  },
  {
    image: "/detail/NLP.jpg",
    alt: "Word embeddings and text summarization project",
    title: "Word Embeddings & Text Summarization",
    description:
      "Trained and visualized Word2Vec, GloVe, and FastText embeddings to capture semantic relationships between words. Built extractive (TextRank) and abstractive (Seq2Seq, Transformer, BART, T5) summarizers, evaluated with ROUGE and BLEU.",
    tags: ["NLP", "Word Embeddings", "Transformers", "Summarization"],
    buttons: [
      { label: "Word Embeddings", href: "https://github.com/desyrani/project-NLP-word-embeddings" },
      { label: "Text Summarization", href: "https://github.com/desyrani/project-NLP-text-summarization" },
    ],
  },
];

export const courseworkProjects: ProjectCard[] = [
  {
    image: "/detail/handwritten.jpg",
    alt: "Project 3",
    title: "Image Classification Building with Handwritten Digit Recognition",
    buttons: [
      { label: "Github", href: "https://github.com/desyrani/project-DNN-image-classification-building-handwritten-digit-recognition" },
    ],
  },
  {
    image: "/detail/strokeprediction.jpg",
    alt: "Project 4",
    title: "Stroke Prediction in Data Mining",
    buttons: [{ label: "Github", href: "https://github.com/desyrani/project-DM-stroke-prediction" }],
  },
  {
    image: "/detail/automatedworkforce.jpg",
    alt: "Project 4",
    title: "Automated Workforce Management",
    buttons: [
      { label: "Auto Time Budget", href: "https://github.com/desyrani/automated-employee-time-budget" },
      { label: "Auto Leave Plan", href: "https://github.com/desyrani/automated-employee-leave-plan" },
      { label: "Auto Attandance Tracker", href: "https://github.com/desyrani/automated-employee-attendance-tracker" },
    ],
  },
  {
    image: "/detail/NLP1.jpg",
    alt: "Project 4",
    title: "Natural Language Processing Preprocessing and Feature Engineering",
    buttons: [
      { label: "Linguistic Anaysis", href: "https://github.com/desyrani/project-NLP-linguistic-analysis" },
      { label: "Feature Engineering", href: "https://github.com/desyrani/project-NLP-feature-engineering" },
    ],
  },
  {
    image: "/detail/sigmoid.jpg",
    alt: "Project 4",
    title: "Sigmoid Function in Deep Neural Networks",
    buttons: [{ label: "Github", href: "https://github.com/desyrani/project-DNN-sigmoid-function" }],
  },
  {
    image: "/detail/predictiveanalysis.jpg",
    alt: "Project 4",
    title: "Predictive Analysis using Linear Regression",
    buttons: [{ label: "Github", href: "https://github.com/desyrani/projects-predictive-analysis-LinearRegression" }],
  },
  {
    image: "/detail/EDAvisualization.jpg",
    alt: "Project 4",
    title: "EDA Visualization Modelling with R",
    buttons: [{ label: "Github", href: "https://github.com/desyrani/projects-EDA-visualization-modelling-inR" }],
  },
  {
    image: "/detail/supervisedunsupervised.jpg",
    alt: "Project 4",
    title: "Supervised and Unsupervised Algorithms Comparison",
    buttons: [{ label: "Github", href: "https://github.com/desyrani/projects-ML-supervised-unsupervised-algorithms-comparison" }],
  },
  {
    image: "/detail/prediction.jpg",
    alt: "Project 4",
    title: "Prediction using Logistic Regression",
    buttons: [{ label: "Github", href: "https://github.com/desyrani/projects-AI-logistic-regression" }],
  },
  {
    image: "/detail/cleaningdata.jpg",
    alt: "Project 4",
    title: "Cleaning Data in Data Mining",
    buttons: [{ label: "Github", href: "https://github.com/desyrani/project-DM-cleaning-data" }],
  },
  {
    image: "/detail/hiddenlayer.jpg",
    alt: "Project 4",
    title: "Hidden Layer of Deep Neural Networks",
    buttons: [
      { label: "1 layer", href: "https://github.com/desyrani/project-DNN-1-hidden-layer" },
      { label: "3 layers", href: "https://github.com/desyrani/project-DNN-3-hidden-layer" },
    ],
  },
  {
    image: "/detail/variousproject.jpg",
    alt: "Project 4",
    title: "Various Projects on Algorithms and Datasets",
    buttons: [
      { label: "AI projects", href: "https://github.com/desyrani/AI-using-some-Algorithms" },
      { label: "ML projects", href: "https://github.com/desyrani/projects-ML-various-algorithms-datasets" },
    ],
  },
];
