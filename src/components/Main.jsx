import React from "react";

function Main() {
  return (
    <main>
      <p className="blwnav">
        <a href="#">Shop online</a> and get Specialist help, free no-contact
        delivery, and more.
      </p>
      <section className="sec">
        <img className="img" src="1stimg.png" alt="iphone12" />
        <span className="cimg">
          <a href="#">Learn More</a>
          <a href="#">Buy Now</a>
        </span>
      </section>
      <section className="sec">
        <img className="img" src="2ndimg.png" alt="iphone12pro" />
        <span className="cimg2">
          <a href="#">Learn More</a>
          <a href="#">Buy Now</a>
        </span>
      </section>
      <section className="sec">
        <img className="img" src="3rdimg.png" alt="ipadpro" />
        <span className="cimg3">
          <a href="#">Learn More</a>
          <a href="#">Buy Now</a>
        </span>
      </section>

      <section>
        <table>
          <tr>
            <td>
              <section className="secmac">
                <img className="imgmac" src="imac.png" alt="iMac" />
                <span className="cimgmac">
                  <a href="#">Learn More</a>
                  <a href="#">Buy Now</a>
                </span>
              </section>
            </td>
            <td>
              <section className="secint">
                <img
                  className="imgint"
                  src="intcol.png"
                  alt="internationalCollection"
                />
                <span className="cimgint">
                  <a href="#">Shop the collection</a>
                </span>
              </section>{" "}
            </td>
          </tr>
        </table>
      </section>
    </main>
  );
}

export default Main;
