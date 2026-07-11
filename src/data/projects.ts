export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: ProjectCategory;
  thumbnail: string;
  images: string[];
  techStack: string[];
  github?: string;
  liveDemo?: string;
  videoDemo?: string;
  problemStatement: string;
  solution: string;
  features: string[];
  challenges: string[];
  learnings: string[];
  architectureDiagram?: string;
}

export type ProjectCategory =
  | "AI/ML"
  | "Full Stack"
  | "Game Dev"
  | "Personal"
  | "Hackathons";

export const categories: { key: ProjectCategory; label: string }[] = [
  { key: "AI/ML", label: "AI/ML Projects" },
  { key: "Full Stack", label: "Full Stack Projects" },
  { key: "Game Dev", label: "Game Development" },
  { key: "Personal", label: "Personal Projects" },
];

export const projects: Project[] = [
  {
    slug: "llm-from-scratch",
    title: "Large Language Model from Scratch",
    shortDescription: "19.3M parameter GPT-style Transformer built from the ground up",
    description:
      "Built a 19.3M parameter GPT-style Transformer from scratch, implementing multi-head causal self-attention, custom tokenization, and a resilient streaming data pipeline for 25GB of OpenWebText. This project demonstrates deep understanding of LLM internals, from architecture design to training optimization.",
    category: "AI/ML",
    thumbnail: "/projects/llm.jpg",
    images: ["/projects/llm.jpg"],
    techStack: ["PyTorch", "CUDA", "Python", "Hugging Face Datasets"],
    github: "https://github.com/divyam2356/llm-from-scratch",
    problemStatement:
      "Training large language models requires massive compute, but understanding the internals demands building one from first principles — from attention mechanisms to data loading at scale.",
    solution:
      "Implemented a complete GPT-style Transformer with multi-head causal self-attention, QKV projections, pre-LayerNorm for training stability, and a memory-mapped data pipeline for efficient 25GB dataset handling.",
    features: [
      "19.3M parameter GPT-style Transformer architecture",
      "Multi-head causal self-attention with QKV projections",
      "Pre-LayerNorm for training stability",
      "Memory-mapped (mmap) training loader with randomized byte-offset sampling",
      "Custom character-level tokenization",
      "Learned positional embeddings",
      "4x expansion Feed-Forward Networks with GELU activations",
      "Resilient streaming pipeline for 25GB OpenWebText dataset",
    ],
    challenges: [
      "Designing a memory-efficient data pipeline for 25GB datasets without loading everything into RAM",
      "Ensuring training stability with proper initialization and LayerNorm placement",
      "Optimizing CUDA operations for custom attention implementations",
    ],
    learnings: [
      "Deep understanding of Transformer architectures and attention mechanisms",
      "Practical experience with large-scale data pipeline engineering",
      "GPU memory optimization and CUDA-level training techniques",
    ],
  },
  {
    slug: "agentic-ai-npc",
    title: "Agentic AI NPC Framework",
    shortDescription: "AI-controlled game NPCs with persistent memory and real-time decision making",
    description:
      "An AI backend using FastAPI and Google ADK that controls Godot NPCs, enabling characters with persistent memory and distinct personalities. Real-time WebSocket connection syncs game state with the AI server, routing NPC decisions back to the engine using strict JSON schemas.",
    category: "Game Dev",
    thumbnail: "/projects/npc.jpg",
    images: ["/projects/npc.jpg"],
    techStack: ["Godot 4.x", "FastAPI", "WebSockets", "Google ADK", "Python"],
    github: "https://github.com/divyam2356/agentic_ai_governed_npc_behaviour",
    problemStatement:
      "Traditional game NPCs follow scripted behaviors that feel predictable and lifeless. Making NPCs truly intelligent requires real-time AI decision-making integrated with game engines.",
    solution:
      "Built a FastAPI backend with Google ADK that processes game state via WebSockets, generates NPC decisions through agentic AI, and returns structured responses to Godot using strict JSON schemas.",
    features: [
      "Real-time WebSocket communication between game engine and AI backend",
      "Persistent NPC memory across game sessions",
      "Distinct personality traits for each NPC",
      "Google ADK integration for agentic decision-making",
      "Strict JSON schema validation for reliable engine communication",
      "Comparative latency analysis between cloud and local inference",
    ],
    challenges: [
      "Minimizing latency for real-time game loop integration",
      "Designing reliable JSON schemas for complex NPC decision outputs",
      "Balancing AI reasoning depth with response time requirements",
    ],
    learnings: [
      "Real-time systems integration between AI backends and game engines",
      "Agentic AI architecture patterns and multi-agent coordination",
      "Latency optimization strategies for cloud vs local inference",
    ],
  },
  {
    slug: "fashion-gpt",
    title: "Fashion GPT",
    shortDescription: "Image-text retrieval system for fashion using CLIP embeddings",
    description:
      "An image-text retrieval system using CLIP embeddings for fashion queries. Features a real-time FastAPI backend computing similarity scores, a scalable data ingestion pipeline via RapidAPI, and ranking logic that groups results by occasion and style.",
    category: "AI/ML",
    thumbnail: "/projects/fashion.jpg",
    images: ["/projects/fashion.jpg"],
    techStack: ["Python", "FastAPI", "CLIP", "RapidAPI", "OpenCV"],
    github: "https://github.com/divyam2356",
    liveDemo: "https://demo.example.com",
    problemStatement:
      "Finding the right fashion items from text descriptions is challenging because visual and textual understanding need to be aligned — traditional keyword matching fails for nuanced fashion queries.",
    solution:
      "Used CLIP embeddings to bridge text and image understanding, built a FastAPI backend for real-time similarity computation, and implemented a scalable ingestion pipeline with structured metadata indexing.",
    features: [
      "CLIP-based image-text similarity search",
      "Real-time FastAPI backend for query processing",
      "Scalable data ingestion via RapidAPI",
      "Structured metadata indexing for fashion items",
      "Ranking and classification by occasion and style",
      "Recommendation relevance through embedding-based retrieval",
    ],
    challenges: [
      "Handling the computational cost of CLIP inference at query time",
      "Designing an efficient ingestion pipeline for diverse fashion imagery",
      "Balancing retrieval accuracy with response latency",
    ],
    learnings: [
      "Multi-modal AI (CLIP) for cross-modal retrieval",
      "Building scalable ML serving pipelines with FastAPI",
      "Embedding-based search system design",
    ],
  },
  {
    slug: "freelance-platform",
    title: "Freelance Platform (Gluck)",
    shortDescription: "Scalable freelance platform with real-time AI workflows for 200+ users",
    description:
      "Architected a scalable freelance platform with real-time AI workflows, OAuth authentication, real-time chat, and cloud infrastructure management. Deployed for 200+ users with modular API architecture.",
    category: "Full Stack",
    thumbnail: "/projects/gluck.jpg",
    images: ["/projects/gluck.jpg"],
    techStack: ["Next.js", "Node.js", "Express.js", "Prisma", "PostgreSQL", "AWS S3", "Socket.io"],
    github: "https://github.com/divyam2356",
    problemStatement:
      "Freelance platforms need real-time collaboration, secure authentication, and scalable infrastructure to handle growing user bases while maintaining performance.",
    solution:
      "Built a full-stack platform with Next.js frontend, Express.js API, Prisma ORM, OAuth via NextAuth, real-time chat with Socket.io, and cloud storage on AWS S3/RDS. Boosted engagement by 40% through UX redesigns.",
    features: [
      "Real-time AI workflows integrated into freelance operations",
      "OAuth authentication via NextAuth",
      "Real-time chat with LLM-based moderation",
      "Cloud infrastructure (AWS S3, RDS) managed via Prisma",
      "Modular API architecture for scalability",
      "UX redesigns that boosted engagement by 40%",
    ],
    challenges: [
      "Integrating real-time features (chat, AI workflows) with a scalable backend",
      "Managing cloud infrastructure costs while maintaining reliability",
      "Implementing LLM-based content moderation without blocking chat flow",
    ],
    learnings: [
      "Full-stack application architecture at scale",
      "Cloud infrastructure management with Prisma and AWS",
      "Real-time communication patterns with Socket.io",
    ],
  },
];
