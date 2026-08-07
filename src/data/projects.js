export const projects = [
  {
    slug: "llm-from-scratch",
    title: "Large Language Model from Scratch",
    shortDescription: "19.3M parameter GPT-style Transformer built from the ground up",
    description:
      "Built a 19.3M parameter GPT-style Transformer from scratch, implementing multi-head causal self-attention, custom tokenization, and a resilient streaming data pipeline for 25GB of OpenWebText.",
    techStack: ["PyTorch", "CUDA", "Python", "Hugging Face Datasets"],
    github: "https://github.com/divyam2356/llm-from-scratch",
    problemStatement:
      "Training large language models requires massive compute, but understanding the internals demands building one from first principles.",
    solution:
      "Implemented a complete GPT-style Transformer with multi-head causal self-attention, QKV projections, pre-LayerNorm for training stability, and a memory-mapped data pipeline for efficient 25GB dataset handling.",
    features: [
      "19.3M parameter GPT-style Transformer architecture",
      "Multi-head causal self-attention with QKV projections",
      "Pre-LayerNorm for training stability",
      "Memory-mapped training loader with randomized byte-offset sampling",
      "Custom character-level tokenization",
      "4x expansion Feed-Forward Networks with GELU activations",
    ],
    challenges: [
      "Designing a memory-efficient data pipeline for 25GB datasets",
      "Ensuring training stability with proper initialization",
      "Optimizing CUDA operations for custom attention implementations",
    ],
    learnings: [
      "Deep understanding of Transformer architectures",
      "Practical experience with large-scale data pipeline engineering",
      "GPU memory optimization and CUDA-level training techniques",
    ],
  },
  {
    slug: "subtitle-ai",
    title: "SubtitleAI — Browser-Based Subtitle Generator & Translator",
    shortDescription: "100% local AI subtitle generation and translation using Whisper + M2M100 in the browser",
    description:
      "A fully client-side web app that generates subtitles from video/audio using OpenAI Whisper models (via Hugging Face Transformers.js) and translates them across 30+ languages using M2M100, NLLB-200, or OPUS-MT — all running locally in the browser with WebGPU/CPU support.",
    techStack: ["Astro", "Transformers.js", "Whisper", "M2M100", "FFmpeg.wasm", "WebGPU", "Tailwind CSS"],
    github: "https://github.com/divyam2356",
    problemStatement:
      "Generating and translating subtitles typically requires server-side APIs, expensive cloud services, or desktop software. Privacy-conscious users need a solution that runs entirely locally.",
    solution:
      "Built a browser-based pipeline: FFmpeg.wasm extracts audio, Whisper runs inference locally via Transformers.js (ONNX), and translation models (M2M100/NLLB-200/OPUS-MT) handle multilingual output — all with zero server calls.",
    features: [
      "In-browser Whisper transcription (Tiny → Large v3 Turbo)",
      "30+ language translation with M2M100, NLLB-200, OPUS-MT",
      "WebGPU acceleration with CPU fallback",
      "Optional cloud API mode (OpenAI-compatible endpoints)",
      "SRT/VTT export with proper timestamp formatting",
      "Custom word correction/replacement system",
      "Real-time progress tracking with chunk-level logging",
    ],
    challenges: [
      "Managing multi-GB model downloads and caching in the browser",
      "Handling WebGPU device detection and graceful CPU fallback",
      "Coordinating FFmpeg audio extraction with Whisper inference pipeline",
    ],
    learnings: [
      "Running ML models in the browser with Transformers.js and ONNX",
      "WebGPU compute pipeline for ML inference",
      "FFmpeg.wasm for client-side media processing",
    ],
  },
  {
    slug: "agentic-ai-npc",
    title: "Agentic AI NPC Framework",
    shortDescription: "AI-controlled game NPCs with persistent memory and real-time decisions",
    description:
      "An AI backend using FastAPI and Google ADK that controls Godot NPCs, enabling characters with persistent memory and distinct personalities via real-time WebSocket connection.",
    techStack: ["Godot 4.x", "FastAPI", "WebSockets", "Google ADK", "Python"],
    github: "https://github.com/divyam2356/agentic_ai_governed_npc_behaviour",
    problemStatement:
      "Traditional game NPCs follow scripted behaviors that feel predictable and lifeless.",
    solution:
      "Built a FastAPI backend with Google ADK that processes game state via WebSockets, generates NPC decisions through agentic AI, and returns structured responses to Godot.",
    features: [
      "Real-time WebSocket communication between game engine and AI backend",
      "Persistent NPC memory across game sessions",
      "Distinct personality traits for each NPC",
      "Google ADK integration for agentic decision-making",
      "Strict JSON schema validation for reliable engine communication",
    ],
    challenges: [
      "Minimizing latency for real-time game loop integration",
      "Designing reliable JSON schemas for complex NPC decisions",
      "Balancing AI reasoning depth with response time",
    ],
    learnings: [
      "Real-time systems integration with game engines",
      "Agentic AI architecture patterns",
      "Latency optimization for cloud vs local inference",
    ],
  },
  {
    slug: "fashion-gpt",
    title: "Fashion GPT",
    shortDescription: "Image-text retrieval system for fashion using CLIP embeddings",
    description:
      "An image-text retrieval system using CLIP embeddings for fashion queries with a real-time FastAPI backend and scalable data ingestion pipeline.",
    techStack: ["Python", "FastAPI", "CLIP", "RapidAPI", "OpenCV"],
    github: "https://github.com/divyam2356",
    problemStatement:
      "Finding the right fashion items from text descriptions requires bridging visual and textual understanding.",
    solution:
      "Used CLIP embeddings to bridge text and image understanding, built a FastAPI backend for real-time similarity computation, and implemented a scalable ingestion pipeline.",
    features: [
      "CLIP-based image-text similarity search",
      "Real-time FastAPI backend for query processing",
      "Scalable data ingestion via RapidAPI",
      "Ranking and classification by occasion and style",
    ],
    challenges: [
      "Handling computational cost of CLIP inference at query time",
      "Designing efficient ingestion pipeline for diverse fashion imagery",
      "Balancing retrieval accuracy with response latency",
    ],
    learnings: [
      "Multi-modal AI (CLIP) for cross-modal retrieval",
      "Building scalable ML serving pipelines",
      "Embedding-based search system design",
    ],
  },
  {
    slug: "freelance-platform",
    title: "Freelance Platform (Gluck)",
    shortDescription: "Scalable freelance platform with real-time AI workflows for 200+ users",
    description:
      "Architected a scalable freelance platform with real-time AI workflows, OAuth authentication, real-time chat, and cloud infrastructure management for 200+ users.",
    techStack: ["Next.js", "Node.js", "Express.js", "Prisma", "PostgreSQL", "AWS S3", "Socket.io"],
    github: "https://github.com/YashKhairnar/Slique",
    problemStatement:
      "Freelance platforms need real-time collaboration, secure authentication, and scalable infrastructure.",
    solution:
      "Built a full-stack platform with Next.js frontend, Express.js API, Prisma ORM, OAuth via NextAuth, real-time chat with Socket.io, and cloud storage on AWS S3/RDS.",
    features: [
      "Real-time AI workflows integrated into freelance operations",
      "OAuth authentication via NextAuth",
      "Real-time chat with LLM-based moderation",
      "Cloud infrastructure managed via Prisma",
      "UX redesigns that boosted engagement by 40%",
    ],
    challenges: [
      "Integrating real-time features with a scalable backend",
      "Managing cloud infrastructure costs",
      "Implementing LLM-based content moderation without blocking chat",
    ],
    learnings: [
      "Full-stack application architecture at scale",
      "Cloud infrastructure management with Prisma and AWS",
      "Real-time communication patterns with Socket.io",
    ],
  },
];
