const fetch = require("node-fetch")

const query = `
    {
      customers(first: 10){
        edges{
          node{
            id
          }
        }
      }
    }
    `

async function fetchData() {
  const res = await fetch("https://kevin013.myshopify.com/admin/api/2022-07/graphql.json", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': "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",
      },
      body: JSON.stringify({query, variables: {}}) 
  })
  const data = await res.json()
  console.log(data.data.customers.edges);
    
}

// fetchData()

const cartQuery = `
  mutation {
    cartCreate(
      input: {
        lines: [
          {
            quantity: 1
            merchandiseId: "gid://shopify/ProductVariant/42073968836808"
          }
        ]
        attributes: { key: "cart_attribute", value: "This is a cart attribute" }
      }
    ) {
      cart {
        id
        createdAt
        updatedAt
        lines(first: 10) {
          edges {
            node {
              id
              merchandise {
                ... on ProductVariant {
                  id
                }
              }
            }
          }
        }
        attributes {
          key
          value
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
          totalDutyAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }

`

async function fetchCart() {
  const res = await fetch("https://kevin013.myshopify.com/api/2022-07/graphql.json", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': "a2dd507dc76d0a2fad44319092092001",
    },
    body: JSON.stringify({query: cartQuery, variables: {}}) 
  })
  const data = await res.json()
  console.log(data);
}

fetchCart()