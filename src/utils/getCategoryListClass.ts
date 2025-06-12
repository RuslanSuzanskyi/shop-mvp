import { CategoryListVariantProps } from "@/entites/category/model/types";

export const getCategoryListClass = (variant: CategoryListVariantProps): string => {
  switch (variant) {
    case 'footer':
      return 'flex flex-col flex-wrap justify-center gap-2 text-sm';
    case 'sidebar':
      return 'flex flex-col gap-4';
    case 'header':
      return 'hidden lg:flex items-center justify-between pl-24 text-nowrap';
    default:
      return '';
  }
};