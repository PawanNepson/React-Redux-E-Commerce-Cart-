import { color } from "@mui/system";
import React from "react";
import Table from "react-bootstrap/Table";

function CardsDetails() {
  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Item Details</h2>
        <section className="container mt-3">
          <div className="iteamsdetails">
            <div className="items_img">
              <img
                src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp"
                alt=""
              />
            </div>
            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p>
                      <strong>Restaurant</strong> : Massala Theory
                    </p>
                    <p>
                      <strong>Price</strong> : 350
                    </p>
                    <p>
                      <strong>Dishes</strong> : Nepali nai ho tara
                    </p>
                    <p>
                      <strong>Total</strong> : 350
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>Rating</strong> :{" "}
                      <span
                        style={{
                          background: "green",
                          color: "#fff",
                          padding: "2px 5px",
                          borderRadius: "5px",
                        }}
                      >
                        3.5 ☆
                      </span>
                    </p>
                    <p>
                      <strong>Order Review</strong> More than 13000+ orders till
                      now
                    </p>
                    <p>
                      <strong>Remove</strong>{" "}
                      <i
                        className="fas fa-trash"
                        style={{
                          color: "red",
                          fontSize: 20,
                          cursor: "pointer",
                        }}
                      ></i>
                    </p>
                  </td>
                </tr>
              </Table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CardsDetails;
