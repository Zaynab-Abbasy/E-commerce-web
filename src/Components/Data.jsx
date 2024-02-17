const Data = [
  {
    id: 1,
    name: "Modern Sofa",
    description: "Stylish and comfortable modern sofa with fabric upholstery",
    price: 599.99,
    quantity:10,
    colors: ["#F5F5DC", "#5C4033", "#3C0008"],
    selectedColor: "#F5F5DC", // Initial selected color
    linkImg: {
      "#F5F5DC": "https://plus.unsplash.com/premium_photo-1661876380455-29b838b2a2ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlubmluZyUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      "#5C4033": "https://images.unsplash.com/photo-1501876725168-00c445821c9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1cm5pdHVyZSUyMGRpbm5pbmd8ZW58MHx8MHx8fDA%3D",
      "#3C0008": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1cm5pdHVyZSUyMGRpbm5pbmd8ZW58MHx8MHx8fDA%3D"
    },
      category: "Dining chairs",
      sizes:["6-person-dinning","4-person-dinning"],
    rating: 4.5,
  },
  {
    id: 2,
    name: "Wooden Dining Table",
    description: "Solid wooden dining table with extendable feature",
    price: 299.99,
    quantity:10,
    sizes:["6-person-dinning","4-person-dinning"],
    colors: ["#F5F5DC", "#5C4033", "#3C0008"],
    selectedColor: "#F5F5DC", // Initial selected color
    linkImg: {
      "#F5F5DC": "https://plus.unsplash.com/premium_photo-1661876380455-29b838b2a2ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlubmluZyUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      "#5C4033": "https://images.unsplash.com/photo-1501876725168-00c445821c9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1cm5pdHVyZSUyMGRpbm5pbmd8ZW58MHx8MHx8fDA%3D",
      "#3C0008": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1cm5pdHVyZSUyMGRpbm5pbmd8ZW58MHx8MHx8fDA%3D"
    },
      category: "Dining Tables",
    rating: 4.2,
  },
  {
    id: 3,
    name: "Wooden Dining Table",
    description: "Solid wooden dining table with extendable feature",
    price: 688.99,
    quantity:10,
    sizes:["6-person-dinning","4-person-dinning"],
    colors: ["#F5F5DC", "#5C4033", "#3C0008"],
    selectedColor: "#F5F5DC", // Initial selected color
    linkImg: {
      "#F5F5DC": "https://plus.unsplash.com/premium_photo-1661876380455-29b838b2a2ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlubmluZyUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      "#5C4033": "https://images.unsplash.com/photo-1501876725168-00c445821c9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1cm5pdHVyZSUyMGRpbm5pbmd8ZW58MHx8MHx8fDA%3D",
      "#3C0008": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1cm5pdHVyZSUyMGRpbm5pbmd8ZW58MHx8MHx8fDA%3D"
    },
      category: "4-person-Dining Tables",
    rating: 4.2,
  },
  {
    id: 4,
    name: "Wooden Dining Table",
    description: "Solid wooden dining table with extendable feature",
    price: 789.99,
    quantity:10,
    sizes:["6-person-dinning","4-person-dinning"],
    colors: ["#F5F5DC", "#5C4033", "#3C0008"],
    selectedColor: "#F5F5DC", // Initial selected color
    linkImg: {
      "#F5F5DC": "https://plus.unsplash.com/premium_photo-1661876380455-29b838b2a2ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlubmluZyUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      "#5C4033": "https://images.unsplash.com/photo-1501876725168-00c445821c9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1cm5pdHVyZSUyMGRpbm5pbmd8ZW58MHx8MHx8fDA%3D",
      "#3C0008": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1cm5pdHVyZSUyMGRpbm5pbmd8ZW58MHx8MHx8fDA%3D"
    },
      category: "6-person-Dining Tables",
    rating: 4.2,
  },
  {
    id: 5,
    name: "Wooden Dining Table",
    description: "Solid wooden dining table with extendable feature",
    price: 1509.99,
    quantity:10,
    sizes:["6-person-dinning","4-person-dinning"],
    colors: ["#F5F5DC", "#5C4033", "#3C0008"],
    selectedColor: "#F5F5DC", // Initial selected color
    linkImg: {
      "#F5F5DC": "https://plus.unsplash.com/premium_photo-1661876380455-29b838b2a2ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlubmluZyUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      "#5C4033": "https://images.unsplash.com/photo-1501876725168-00c445821c9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1cm5pdHVyZSUyMGRpbm5pbmd8ZW58MHx8MHx8fDA%3D",
      "#3C0008": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1cm5pdHVyZSUyMGRpbm5pbmd8ZW58MHx8MHx8fDA%3D"
    },
    category: "4-person-Dining Tables",
    rating: 4.2,
  },
  {
    id: 6,
    name: "Wooden Dining Table",
    description: "Solid wooden dining table with extendable feature",
    price: 56789.99,
    quantity:10,
    sizes:["6-person-dinning","4-person-dinning"],
    colors: ["#F5F5DC", "#5C4033", "#3C0008"],
    selectedColor: "#F5F5DC", // Initial selected color
    linkImg: {
      "#F5F5DC": "https://plus.unsplash.com/premium_photo-1661876380455-29b838b2a2ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlubmluZyUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      "#5C4033": "https://images.unsplash.com/photo-1501876725168-00c445821c9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1cm5pdHVyZSUyMGRpbm5pbmd8ZW58MHx8MHx8fDA%3D",
      "#3C0008": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1cm5pdHVyZSUyMGRpbm5pbmd8ZW58MHx8MHx8fDA%3D"
    },
    category: "Dining Tables",
    rating: 4.2,
  },
  {
    id: 7,
    name: "Wooden Dining Table",
    description: "Solid wooden dining table with extendable feature",
    price: 29009.99,
    quantity:10,
    sizes:["6-person-dinning","4-person-dinning"],
    colors: ["#F5F5DC", "#5C4033", "#3C0008"],
    selectedColor: "#F5F5DC", // Initial selected color
    linkImg: {
      "#F5F5DC": "https://plus.unsplash.com/premium_photo-1661876380455-29b838b2a2ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlubmluZyUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      "#5C4033": "https://images.unsplash.com/photo-1501876725168-00c445821c9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1cm5pdHVyZSUyMGRpbm5pbmd8ZW58MHx8MHx8fDA%3D",
      "#3C0008": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1cm5pdHVyZSUyMGRpbm5pbmd8ZW58MHx8MHx8fDA%3D"
    },
    category: "Dining chairs",
    rating: 4.2,
  },
  {
    id: 8,
    name: "Wooden Dining Table",
    description: "Solid wooden dining table with extendable feature",
    price: 9099.99,
    quantity:10,
    sizes:["6-person-dinning","4-person-dinning"],
    colors: ["#F5F5DC", "#5C4033", "#3C0008"],
    selectedColor: "#F5F5DC", // Initial selected color
    linkImg: {
      "#F5F5DC": "https://plus.unsplash.com/premium_photo-1661876380455-29b838b2a2ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlubmluZyUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      "#5C4033": "https://images.unsplash.com/photo-1501876725168-00c445821c9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1cm5pdHVyZSUyMGRpbm5pbmd8ZW58MHx8MHx8fDA%3D",
      "#3C0008": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1cm5pdHVyZSUyMGRpbm5pbmd8ZW58MHx8MHx8fDA%3D"
    },
    category: "Dining Tables",
    rating: 4.2,
  },
  {
    id: 9,
    name: "Wooden Dining Table",
    description: "Solid wooden dining table with extendable feature",
    price: 67899.99,
    quantity:10,
    sizes:["6-person-dinning","4-person-dinning"],
    colors: ["#F5F5DC", "#5C4033", "#3C0008"],
    selectedColor: "#F5F5DC", // Initial selected color
    linkImg: {
      "#F5F5DC": "https://plus.unsplash.com/premium_photo-1661876380455-29b838b2a2ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlubmluZyUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      "#5C4033": "https://images.unsplash.com/photo-1501876725168-00c445821c9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1cm5pdHVyZSUyMGRpbm5pbmd8ZW58MHx8MHx8fDA%3D",
      "#3C0008": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1cm5pdHVyZSUyMGRpbm5pbmd8ZW58MHx8MHx8fDA%3D"
    },
    category: "6-person-Dining Tables",
    rating: 4.2,
  },
  {
    id: 10,
    name: "Wooden Dining Table",
    description: "Solid wooden dining table with extendable feature",
    price: 67549.99,
    quantity:10,
    sizes:["6-person-dinning","4-person-dinning"],
    colors: ["#F5F5DC", "#5C4033", "#3C0008"],
    selectedColor: "#F5F5DC", // Initial selected color
    linkImg: {
      "#F5F5DC": "https://plus.unsplash.com/premium_photo-1661876380455-29b838b2a2ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlubmluZyUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      "#5C4033": "https://images.unsplash.com/photo-1501876725168-00c445821c9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1cm5pdHVyZSUyMGRpbm5pbmd8ZW58MHx8MHx8fDA%3D",
      "#3C0008": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1cm5pdHVyZSUyMGRpbm5pbmd8ZW58MHx8MHx8fDA%3D"
    },
    category: "Dining Tables",
    rating: 4.2,
  },
  {
    id: 11,
    name: "Wooden Dining Table",
    description: "Solid wooden dining table with extendable feature",
    price: 1359.99,
    quantity:10,
    sizes:["6-person-dinning","4-person-dinning"],
    colors: ["#F5F5DC", "#5C4033", "#3C0008"],
    selectedColor: "#F5F5DC", // Initial selected color
    linkImg: {
      "#F5F5DC": "https://plus.unsplash.com/premium_photo-1661876380455-29b838b2a2ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlubmluZyUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      "#5C4033": "https://images.unsplash.com/photo-1501876725168-00c445821c9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1cm5pdHVyZSUyMGRpbm5pbmd8ZW58MHx8MHx8fDA%3D",
      "#3C0008": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1cm5pdHVyZSUyMGRpbm5pbmd8ZW58MHx8MHx8fDA%3D"
    },
    category: "Dining chairs",
    rating: 4.2,
  },
  {
    id: 12,
    name: "Wooden Dining Table",
    description: "Solid wooden dining table with extendable feature",
    price: 19329.99,
    quantity:10,
    sizes:["6-person-dinning","4-person-dinning"],
    colors: ["#F5F5DC", "#5C4033", "#3C0008"],
    selectedColor: "#F5F5DC", // Initial selected color
    linkImg: {
      "#F5F5DC": "https://plus.unsplash.com/premium_photo-1661876380455-29b838b2a2ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlubmluZyUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      "#5C4033": "https://images.unsplash.com/photo-1501876725168-00c445821c9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1cm5pdHVyZSUyMGRpbm5pbmd8ZW58MHx8MHx8fDA%3D",
      "#3C0008": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1cm5pdHVyZSUyMGRpbm5pbmd8ZW58MHx8MHx8fDA%3D"
    },
    category: "4-person-Dining Tables",
    rating: 4.2,
  },
  {
    id: 13,
    name: "Wooden Dining Table",
    description: "Solid wooden dining table with extendable feature",
    price: 7799.99,
    quantity:10,
    sizes:["6-person-dinning","4-person-dinning"],
    colors: ["#F5F5DC", "#5C4033", "#3C0008"],
    selectedColor: "#F5F5DC", // Initial selected color
    linkImg: {
      "#F5F5DC": "https://plus.unsplash.com/premium_photo-1661876380455-29b838b2a2ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlubmluZyUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      "#5C4033": "https://images.unsplash.com/photo-1501876725168-00c445821c9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1cm5pdHVyZSUyMGRpbm5pbmd8ZW58MHx8MHx8fDA%3D",
      "#3C0008": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1cm5pdHVyZSUyMGRpbm5pbmd8ZW58MHx8MHx8fDA%3D"
    },
    category: "Dining Tables",
    rating: 4.2,
  },
  {
    id: 14,
    name: "Wooden Dining Table",
    description: "Solid wooden dining table with extendable feature",
    price: 7789.99,
    quantity:10,
    sizes:["6-person-dinning","4-person-dinning"],
    colors: ["#F5F5DC", "#5C4033", "#3C0008"],
    selectedColor: "#F5F5DC", // Initial selected color
    linkImg: {
      "#F5F5DC": "https://plus.unsplash.com/premium_photo-1661876380455-29b838b2a2ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlubmluZyUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      "#5C4033": "https://images.unsplash.com/photo-1501876725168-00c445821c9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1cm5pdHVyZSUyMGRpbm5pbmd8ZW58MHx8MHx8fDA%3D",
      "#3C0008": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1cm5pdHVyZSUyMGRpbm5pbmd8ZW58MHx8MHx8fDA%3D"
    },
    category: "Dining chairs",
     rating: 4.2,
   },
   {
     id: 15,
     name: "Wooden Dining Table",
     description: "Solid wooden dining table with extendable feature",
     price: 9099.99,
     quantity:10,
     sizes:["6-person-dinning","4-person-dinning"],
     colors: ["#F5F5DC", "#5C4033", "#3C0008"],
    selectedColor: "#F5F5DC", // Initial selected color
    linkImg: {
      "#F5F5DC": "https://plus.unsplash.com/premium_photo-1661876380455-29b838b2a2ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlubmluZyUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      "#5C4033": "https://images.unsplash.com/photo-1501876725168-00c445821c9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1cm5pdHVyZSUyMGRpbm5pbmd8ZW58MHx8MHx8fDA%3D",
      "#3C0008": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1cm5pdHVyZSUyMGRpbm5pbmd8ZW58MHx8MHx8fDA%3D"
    },
     category: "Dining Tables",
     rating: 4.2,
   },
];
export default Data;
