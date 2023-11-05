import { ICategory } from "@/interfaces/common";

export const categories: ICategory[] = [
  {
    category: "CPU / Processor",
    categorySlug: "processor",
    company: ["amd", "intel"],
  },
  {
    category: "RAM",
    categorySlug: "ram",
    company: ["g-skill", "asus", "msi"],
  },
  {
    category: "Power Supply Unit",
    categorySlug: "power_supply",
    company: ["antec", "thermaltake", "corsair"],
  },
  {
    category: "Storage Device",
    categorySlug: "storage",
    company: ["seagate", "toshiba", "western-digital"],
  },
  {
    category: "Monitor",
    categorySlug: "monitor",
    company: ["hp", "asus", "msi"],
  },
  {
    category: "Motherboard",
    categorySlug: "motherboard",
    company: ["asus", "msi", "gigabyte"],
  },
];
