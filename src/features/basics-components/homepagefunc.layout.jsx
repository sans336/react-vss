import Footer from "./Footer.Layout";
import Header from "./header.layout";

const HomepageFunc = () => {
  return (
    <div>
      <Header />
          <h1 style = {{ color: "tomato" }}>
              Hello Yash</h1>
      <button>Get Details</button>
      <button>Get Career Profiles</button>
      <input type="text" />
      <Footer />
    </div>
  );
};

export default HomepageFunc;