import type { ComponentPropsWithoutRef, ElementType } from "react";


type ButtonProps<C extends ElementType> = {
    as?: C;
    children: React.ReactNode;
} & ComponentPropsWithoutRef<C>

function Button <C extends ElementType>({ children, as }: ButtonProps<C>) {
    const Component = as || 'button';
    
    return <Component className="inline-block text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:focus:ring-gray-500 mr-2 mb-2 w-full">
        { children }
    </Component>
}

export default Button;