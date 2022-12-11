import React from "react";
function Home() {
  return (
    <div>
      <div className="row">
        <div
          className="bg-image"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/pleasant-looking-afro-american-woman-holds-notepads-papers-studies-college-glad-finish-studying_273609-26983.jpg?w=1380&t=st=1670580150~exp=1670580750~hmac=6258aa1eb938815c411506f5785de084fab3b643b793cd5eb20d705f4165362e')",
            height: "100vh",
            width: "100%",
          }}
        >
          <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
            <div className="h-100">
              <h1
                style={{
                  fontWeight: "bold",
                  fontFamily: "cursive",
                  color: "white",
                  fontSize: "30px",
                  marginTop: "300px",
                  display: "inherit",
                  marginLeft: "200px",
                }}
              >
                {" "}
                OUR LEARNING MANAGEMENT SYSTEM
              </h1>
              <div
                style={{
                  fontWeight: "normal",
                  fontFamily: "cursive",
                  color: "white",
                  fontSize: "20px",
                  marginTop: "20px",
                  display: "inherit",
                  marginLeft: "200px",
                }}
                className="paragraph"
              >
                <p>
                  Welcome to our school learning management system, Your
                  classroom away from school!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
