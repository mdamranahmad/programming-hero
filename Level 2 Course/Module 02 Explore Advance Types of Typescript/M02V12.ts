// Explore Utility Types

// a type that defines different properties of a product
type Product = {
    id: number;
    name: string;
    price: string;
    stock: number;
    color?: string;     // optional
};

// a summary of type Product where desired proprties are listed mannually
type ProductSummary = {
    id: number;
    name: string;
    price: string;
};

// a summary of type Product where desired properties are sorted dynamically
// using Pick

type ProductSummaryD = Pick<Product, 'id' | 'name' | 'price'>;

// Pick <typeToBeSorted, keyof typeToBeSorted in union>
/**
 * type ProductSummaryD = {
    id: number;
    name: string;
    price: string;
    }
 */

// a summary of type Product where undesired properties are omitted dynamically
// using Omit

type ProductSummaryWOUndProp = Omit<Product, 'stock' | 'color'>;

// Omit <typeToBeSorted, keyof typeToBeSorted in union>
/**
 * type ProductSummaryD = {
    id: number;
    name: string;
    price: string;
    }
 */

type ProductSummaryWOUndProp1 = Omit<Product, 'id' | 'name' | 'price'>;

// Omit <typeToBeSorted, keyof typeToBeSorted in union>
/**
 * type ProductSummaryWOUndProp1 = {
    stock: number;
    color?: string | undefined;
    }
 */

// Pick and Omit are opposite to each other

// a type that must have a desired proeprties
// using Required

type ProductWStock = Required<Product>;

// every properties in Product is mandatory, there is no optional
/**
 * type ProductWStock = {
    id: number;
    name: string;
    price: string;
    stock: number;
    color: string;
    }
 */


// a type where every proeprties optional
// using Partial

type ProductWOptionalProp = Partial<Product>;

// every properties in Product is optional, there is no mandatory properties
/**
 * type ProductWOptionalProp = {
    id?: number | undefined;
    name?: string | undefined;
    price?: string | undefined;
    stock?: number | undefined;
    color?: string | undefined;
}
 */

// Required and Partial are opposite utility type for each other

// a types where all properties are readonly, no modification is allowed
// using Readonly

type ProductWReadOnlyProp = Readonly<Product>;

/**
 * type ProductWReadOnlyProp = {
    readonly id: number;
    readonly name: string;
    readonly price: string;
    readonly stock: number;
    readonly color?: string | undefined;
    }
 */

// a type that defines the which type the key and value will be
// using Record

const emptyObj : Record<string, any> = {};

// Record<typeOfKeys, typeOfValue>
/**
 * emptyObj = {
 * mustBeString: canBeAny,
 * }
 */

const product1 = {
    id: 222,
    name: 'Mouse',
    price: '20',
}


