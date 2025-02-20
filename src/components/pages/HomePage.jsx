import { useState } from "react";

export default function HomePage() {
  const [data, setData] = useState();
  const [error, setError] = useState("");

  // const fetchData = () => {
  //   const payload = {
  //     credentials: "include",
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   fetch("http://127.0.0.1:5000/user/auth", payload)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //       if (!data.ok) {
  //         setError(data);
  //       } else {
  //         history.push("/home");
  //       }
  //     })
  //     .catch((err) => {
  //       console.error("Login error:", err);
  //     });
  // };

  // return (
  //   <div className="home-container">
  //     <h1>Hello from home</h1>;
  //     <button onClick={fetchData}>Fetch Some Stuff</button>
  //     <p>{error ? error : data ? data : ""}</p>
  //   </div>
  // );
  return <h1>Home</h1>;
}
