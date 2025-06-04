export type CategoryProps = string;

export type CategoryListVariantProps = 'header' | 'footer' | 'sidebar';

export interface CategoryListProps {
  variant: CategoryListVariantProps;
};