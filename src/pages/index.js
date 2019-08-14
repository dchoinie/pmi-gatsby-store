import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => {
  const stripe = window.Stripe("pk_test_8xiHw0K0PYiSDC2r0LnjdnKu00h00lezGz")

  const placeOrder = sku => {
    stripe.redirectToCheckout({
      items: [
        {
          sku,
          quantity: 1,
        },
      ],
      successUrl: "http://localhost:8000/success",
      cancelUrl: "http://localhost:8000/cancel",
    })
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <div>
        <article>
          <h3>Single Day Pass</h3>
          <button style={{}} onClick={() => placeOrder("sku_FbzYNZNZbE2Xr0")}>
            Purchase
          </button>
        </article>
      </div>
    </Layout>
  )
}

export default IndexPage
