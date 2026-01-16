
export interface GroceryItemProps {
    name: string;
    quantity: number;
    is_completed: boolean
}

export interface GroceryListProps {
    _id?: string,
    user_id: string,
    title: string,
    list_items: GroceryItemProps[],
}