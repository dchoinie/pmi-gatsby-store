import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"

const membership = () => {
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
      <SEO title="membership" />
      <div className="text-center px-12">
        <PageTitle title="Membership Options" />
        <p>
          All "no-contract" memberships are priced for 1 month of gym access.
        </p>
      </div>
      <div className="px-12 my-12">
        <table
          id="membershipTable"
          className="mx-auto text-center"
          style={{
            // border: "1px solid red",
            width: "100%",
            fontFamily: "Quicksand",
          }}
        >
          <thead className="text-2xl font-bold">
            <tr className="underline" style={{ height: "5rem" }}>
              <td>Membership Option</td>
              <td>No Contract</td>
              <td>
                <p>12 Month Contract</p>
                <p className="text-sm">requires EFT</p>
              </td>
            </tr>
          </thead>
          <tbody className="text-xl">
            <tr style={{ height: "5rem" }}>
              <td colSpan="3" className="text-xl font-bold">
                Individual Options
              </td>
            </tr>
            <tr style={{ height: "5rem" }}>
              <td>Individual</td>
              <td>
                <button
                  className="menuLink"
                  onClick={() => placeOrder("sku_FcGEaYb9S5kjEg")}
                >
                  $35
                </button>
              </td>
              <td>
                <button>$25</button>
              </td>
            </tr>
            <tr style={{ height: "5rem" }}>
              <td>Student / Military</td>
              <td>
                <button
                  className="menuLink"
                  onClick={() => placeOrder("sku_FcGFb7WDJiAkg8")}
                >
                  $25
                </button>
              </td>
              <td>$25</td>
            </tr>
            <tr style={{ height: "5rem", borderBottom: "1px solid #3d2e3c" }}>
              <td>Senior &#40;65+&#41;</td>
              <td>
                <button
                  className="menuLink"
                  onClick={() => placeOrder("sku_FcGFl9RUxKIUFO")}
                >
                  $25
                </button>
              </td>
              <td>$25</td>
            </tr>
            <tr style={{ height: "5rem" }}>
              <td colSpan="3" className="text-xl font-bold">
                Group Options
              </td>
            </tr>
            <tr style={{ height: "5rem" }}>
              <td>Add-On 1st Person</td>
              <td>
                <button
                  className="menuLink"
                  onClick={() => placeOrder("sku_FcGI6qiDRe0s4Y")}
                >
                  $15
                </button>
              </td>
              <td>$15</td>
            </tr>
            <tr style={{ height: "5rem", borderBottom: "1px solid #3d2e3c" }}>
              <td>Each Additional Add-On</td>
              <td>$5</td>
              <td>$5</td>
            </tr>
            <tr style={{ height: "5rem" }}>
              <td colSpan="3" className="text-xl font-bold">
                Fees &amp; Extras
              </td>
            </tr>
            <tr style={{ height: "5rem" }}>
              <td>Registration Fee</td>
              <td>$50</td>
              <td>$25</td>
            </tr>
            <tr style={{ height: "5rem" }}>
              <td>24-Hour Club Access Card</td>
              <td>$25</td>
              <td>$25</td>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-col">
          <small>* replacement cards are $10 each</small>
          <small>* all access cards returned receive $10 deposit back</small>
        </div>
      </div>
    </Layout>
  )
}

export default membership
