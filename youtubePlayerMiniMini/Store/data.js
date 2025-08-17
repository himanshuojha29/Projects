const videosData = [
    {
        id: 1,
        title: "React Tutorial for Beginners - Complete Course",
        thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=320&h=180&fit=crop",
        channel: "CodeMaster",
        views: "2.3M",
        uploadTime: "2 weeks ago",
        duration: "3:45:20",
        description: "Learn React from scratch in this comprehensive tutorial. We'll cover components, hooks, state management, and more. Perfect for beginners who want to get started with React development.",
        likes: "45K",
        dislikes: "1.2K",
        subscribers: "890K",
        profileImg: "https://images.unsplash.com/photo-1754653099086-3bddb9346d37?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
        video: "https://www.youtube.com/embed/lVzb6pmel_E"
    },
    {
        id: 2,
        title: "JavaScript ES6+ Features You Must Know",
        thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=320&h=180&fit=crop",
        channel: "JS Ninja",
        views: "1.8M",
        uploadTime: "1 week ago",
        duration: "28:15",
        description: "Discover the most important ES6+ features that every JavaScript developer should know. Arrow functions, destructuring, modules, and much more!",
        likes: "32K",
        dislikes: "890",
        subscribers: "654K",
        profileImg: "https://images.unsplash.com/photo-1754653099086-3bddb9346d37?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
        video: "https://www.youtube.com/embed/PkZNo7MFNFg"
    },
    {
        id: 3,
        title: "Building a Full Stack App with Node.js",
        thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=320&h=180&fit=crop",
        channel: "FullStack Dev",
        views: "956K",
        uploadTime: "3 days ago",
        duration: "2:15:30",
        description: "Complete tutorial on building a full stack application using Node.js, Express, and MongoDB. Includes authentication, CRUD operations, and deployment.",
        likes: "28K",
        dislikes: "567",
        subscribers: "432K",
        profileImg: "https://images.unsplash.com/photo-1754653099086-3bddb9346d37?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
        video: "https://www.youtube.com/embed/Oe421EPjeBE"
    },
    {
        id: 4,
        title: "CSS Grid vs Flexbox - When to Use What",
        thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=320&h=180&fit=crop",
        channel: "CSS Guru",
        views: "723K",
        uploadTime: "5 days ago",
        duration: "15:42",
        description: "Learn the differences between CSS Grid and Flexbox, and when to use each layout system for maximum efficiency in your web designs.",
        likes: "19K",
        dislikes: "234",
        subscribers: "298K",
        profileImg: "https://images.unsplash.com/photo-1754653099086-3bddb9346d37?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
        video: "https://www.youtube.com/embed/t6CBKf8K_Ac"
    },
    {
        id: 5,
        title: "Python Data Science Complete Course",
        thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=320&h=180&fit=crop",
        channel: "DataScience Pro",
        views: "1.2M",
        uploadTime: "1 month ago",
        duration: "4:22:10",
        description: "Master data science with Python! This course covers NumPy, Pandas, Matplotlib, Seaborn, and machine learning basics. Perfect for beginners.",
        likes: "67K",
        dislikes: "2.1K",
        subscribers: "1.2M",
        profileImg: "https://images.unsplash.com/photo-1754653099086-3bddb9346d37?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
        video: "https://www.youtube.com/embed/rfscVS0vtbw"
    },
    {
        id: 6,
        title: "Docker Explained in 100 Seconds",
        thumbnail: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=320&h=180&fit=crop",
        channel: "TechQuick",
        views: "2.8M",
        uploadTime: "2 months ago",
        duration: "1:40",
        description: "Quick explanation of Docker containers and why they're essential for modern software development. Learn the basics in under 2 minutes!",
        likes: "89K",
        dislikes: "1.5K",
        subscribers: "2.1M",
        profileImg: "https://images.unsplash.com/photo-1754653099086-3bddb9346d37?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
        video: "https://www.youtube.com/embed/Gjnup-PuquQ"
    }
];

const comments = [
    {
        id: 1,
        author: "DevEnthusiast",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
        text: "This is exactly what I needed! Great explanation of the concepts.",
        likes: 42,
        time: "2 hours ago"
    },
    {
        id: 2,
        author: "CodeNewbie22",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
        text: "Thanks for making this so easy to understand. The examples really helped!",
        likes: 18,
        time: "5 hours ago"
    },
    {
        id: 3,
        author: "WebDevMaster",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
        text: "Could you do a follow-up video covering advanced topics?",
        likes: 7,
        time: "1 day ago"
    }
];
export { videosData, comments };