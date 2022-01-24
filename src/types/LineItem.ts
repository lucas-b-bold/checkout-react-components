export interface LineItems{
  productData: {
    id: string,
    title: string,
    imageUrl: string,
    properties: {
      [key: string]: string
    },
    description: string,
    quantity: number,
    price: number,
    totalPrice: number,
    visible: boolean,
    lineItemKey: string,
    barcode: string,
    compareAtPrice: number,
    weight: number,
    weightUnit: string,
    productId: string,
    variantId: string,
    requiresShipping: string,
    sku: string,
    taxable: boolean,
    tags: string
  },
  taxes: any, //TODO
  fees: any, //TODO
  discounts: any, //TODO
  fulfilledQuantity: number
}