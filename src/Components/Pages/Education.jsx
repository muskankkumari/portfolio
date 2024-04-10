import React from "react";
import gif from "../../assets/study.gif";
import Technologies from "../Technologies";
import vbu from "../../assets/vbuimg.webp";
import isc from "../../assets/iscimg.avif";
import scl from "../../assets/schoolimg.jpg";

const Education = () => {
  return (
    <>
      <div className="education">
        <div className="education-top">
          <div className="education-topDesc">
            <div className="heading">Education</div>
            <div className="para">
              My education journey has been an exciting and transformative path
              that has shaped my knowledge, skills, and personal growth. From
              the early stages of my academic life to the pursuit of higher
              education, each step has played a crucial role in shaping my
              educational foundation and preparing me for future endeavors.
            </div>
            <div className="para">
              Education Is Not The Learning Of Facts, But The Training Of The
              Mind To Think.
            </div>
          </div>
          <div className="education-topImg">
            <img src={gif} alt="" />
          </div>
        </div>
        <hr />
        <div className="education-sec mt-5">
          <div className="education-secDetails">
            <div className="education-institute">
              Vinoba Bhave University, Hazaribag
            </div>
            <div className="education-class">
              Bachlor's of Computer Applications
            </div>
            <div className="education-boxDe">
              <div className="education-year">2023-2026</div>
            </div>
          </div>
          <div className="education-secImg">
            <img src={vbu} alt="" />
          </div>
        </div>
        <div className="education-sec isc">
        <div className="education-secImg">
            <img src={isc} alt="" />
          </div>
          <div className="education-secDetails">
            <div className="education-institute">
              Inter Science College Hazaribag
            </div>
            <div className="education-class">
             Intermediate
            </div>
            <div className="education-boxDe">
              <div className="education-year">Marks: 91% | 2021-2023</div>
            </div>
          </div>
          
        </div>
        <div className="education-sec">
          <div className="education-secDetails">
            <div className="education-institute">
              St. Robert Girls High School
            </div>
            <div className="education-class">
              Matriculation
            </div>
            <div className="education-boxDe">
              <div className="education-year">Marks: 95% | 2021</div>
            </div>
          </div>
          <div className="education-secImg">
            <img src={scl} alt="" />
          </div>
        </div>
      </div>
      <hr/>
      <Technologies/>
    </>
  );
};

export default Education;
