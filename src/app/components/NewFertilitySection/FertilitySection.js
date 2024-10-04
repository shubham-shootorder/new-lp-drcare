"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  Tab,
  Tabs,
  TabContainer,
  TabContent,
  TabPane,
  Nav,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Image from "next/image";

function CardContent({ imageSrc, title, desc }) {
  const defaultImage = "https://via.placeholder.com/150"; // Default image URL

  return (
    <div className="card mobile-card-p">
      <div className="row g-0 align-items-center fertility-card-content">
        <div className="col-12 col-md-4">
          <div className="icon-placeholder mx-auto treatment-img-card">
            <Image
              src={imageSrc || defaultImage}
              alt={title}
              className="img-fluid rounded"
              height={200}
              width={300}
            />
          </div>
        </div>
        <div className="col-12 col-md-8">
          <div className="card-body">
            <p className="card-title avail-emi text-center text-md-start">
              {title}
            </p>
            <div className="card-text text-center text-md-start">{desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FertilitySection({ center }) {
  const navRef = useRef(null);
  const [activeKey, setActiveKey] = useState("infertility-testing");

  useEffect(() => {
    const navLinks = navRef.current.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const navTabs = navRef.current;
        const tabWidth = link.offsetWidth;

        // Scroll by the width of one tab to the left
        navTabs.scrollBy({ left: tabWidth, behavior: "smooth" });
      });
    });

    // Clean up event listeners on unmount
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", null);
      });
    };
  }, []);

  return (
    <div id="f-section">
      <h1 className="container heading-text text-black mb-3">
        {/* {center?.center_name
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")} */}
        Homeopathy Treatment For Diabetes Mellitus
      </h1>

      <TabContainer
        defaultActiveKey="infertility-testing"
        activeKey={activeKey}
        onSelect={(k) => setActiveKey(k)}
      >
        <Nav
          variant="tabs"
          className="container mt-3 flex-nowrap justify-content-start justify-content-md-center"
          ref={navRef}
        >
          <Nav.Item>
            <Nav.Link eventKey="infertility-testing">
              Infertility Testing
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="infertility-treatments">Types</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="advanced-treatments">Symptoms</Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link eventKey="fertility-preservations">
              Fertility Preservations
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="donor-program">Donor Program</Nav.Link>
          </Nav.Item> */}
        </Nav>

        <TabContent>
          <TabPane
            eventKey="infertility-testing"
            className={
              activeKey === "infertility-testing" ? "tab-pane-active" : ""
            }
          >
            <div className="row container justify-content-center g-4 mx-auto">
              <div className="col-12 col-md-12">
                <CardContent
                  imageSrc={"/img/Infertility_Testing/Infertility_Workup.jpg"}
                  title={"What is Diabetes Mellitus?"}
                  desc={
                    "The word “Diabetes mellitus” means honey urine or madhumeha in sanskrit. It was so-called as it was observed that this urine use to attract ants. It is not a new disease but an ancient one but believed to be affecting only the affluent class. Often referred s blood sugar by lay man, diabetes is a metabolic disorder causing increased sugar or glucose level in the blood due to either insufficiency of internal secretion hormone or the unresponsiveness of the cells to both. "
                  }
                />
              </div>
              {/* <div className="col-12 col-md-6">
                <CardContent
                  imageSrc={"/img/Infertility_Testing/Semen_Analysis.jpg"}
                  title={"Semen Analysis"}
                  desc={
                    "Semen analysis, a common fertility test that helps in detailed assessment of sperm health. It involves assessing semen sample for factors such as sperm count, motility, appearance and other parameters."
                  }
                />
              </div> */}
              {/* <div className="col-12 col-md-6">
                <CardContent
                  imageSrc={"/img/Infertility_Testing/AMH_Testing.jpg"}
                  title={"AMH Testing"}
                  desc={
                    "Egg reserve in a woman is crucial factor in estimating the fertility potential. AMH testing, a simple blood test is used to estimate Anti-Mullerian Hormone levels in the blood which indicates a woman’s egg count."
                  }
                />
              </div> */}
              {/* <div className="col-12 col-md-6">
                <CardContent
                  imageSrc={"/img/Infertility_Testing/Scanning.jpg"}
                  title={"Scanning"}
                  desc={
                    "Presence of any structural abnormalities in the ovaries, fallopian tubes, and uterus cause infertility. These can be detected through an abdominal ultrasound scan which creates images of the internal system."
                  }
                />
              </div> */}
            </div>
          </TabPane>
          <TabPane
            eventKey="infertility-treatments"
            className={
              activeKey === "infertility-treatments" ? "tab-pane-active" : ""
            }
          >
            <div className="row container justify-content-center g-4 mx-auto">
              <div className="col-12 col-md-6 ">
                <CardContent
                  imageSrc={"/img/Treatments/Infertility_Treatments/OITI.png"}
                  title={"Type 1"}
                  desc={
                    "diabetes dependent diabetes Glucose metabolism and utilization is the prime responsibility of hormone secreted by the “beta cells” of Pancreas. In type 1 diabetes, the beta cells are lost leading to non secretion of hormone. It is mainly considered as an auto immune hereditary condition and affects an individual at an early age, as early as in childhood."
                  }
                />
              </div>
              <div className="col-12 col-md-6 ">
                <CardContent
                  imageSrc={
                    "/img/Treatments/Infertility_Treatments/IUI – Intrauterine Insemination.png"
                  }
                  title={"Type 2"}
                  desc={
                    "diabetes or Non internal secretion dependent diabetes In type 2 diabetes though the beta cells secrete, it is either inadequate or the body cells fail to respond to it. The defective responsiveness of body tissues to internal secretion is believed to involve the receptor. However, the specific defects are not known. Type 2 diabetes is the most common type of diabetes. Earlier it use to affect persons after forty –fifty years of age but now a days we find young persons being affected by it."
                  }
                />
              </div>
              <div className="col-12 col-md-6 ">
                <CardContent
                  imageSrc={
                    "/img/Treatments/Infertility_Treatments/IVF - Invitro Fertilization.png"
                  }
                  title={"Type 3"}
                  desc={
                    "Gestational Diabetes occurring during the state of pregnancy is known as Gestational diabetes. Previously, apparently normal woman may develop high blood sugar levels during her pregnancy. It may be transient and sugar levels could come down to normalcy after delivery but in some it can lead to Type 2 diabetes"
                  }
                />
              </div>
              <div className="col-12 col-md-6 ">
                <CardContent
                  imageSrc={
                    "/img/Treatments/Infertility_Treatments/ICSI - Intra Cytoplasmic Sperm Injection.png"
                  }
                  title={"Type 4"}
                  desc={
                    "Maturity Onset Diabetes of Young Acronymed as MODY, it is an autosomal dominant genetic disorder affecting internal secretion production and often runs in families."
                  }
                />
              </div>
              {/* <div className="col-12 col-md-6 ">
                <CardContent
                  imageSrc={
                    "/img/Treatments/Infertility_Treatments/IVM - Invitro Maturation of Oocytes.png"
                  }
                  title={"IVM - Invitro Maturation of Oocytes"}
                  desc={
                    "IVM, a specialised fertility treatment for women with PCOS. Immature eggs are collected from the ovaries, are matured in the lab and fertilized with healthy sperm to form an embryo."
                  }
                />
              </div> */}
              {/* <div className="col-12 col-md-6 ">
                <CardContent
                  imageSrc={
                    "/img/Treatments/Infertility_Treatments/Laparoscopy.png"
                  }
                  title={"Laparoscopy"}
                  desc={
                    "Laparoscopy is a minimally invasive surgical procedure to check for fallopian tube blockages and for fibroids in the uterus. It is also used in treating adhesions, polyps or fibroids without the need for surgery."
                  }
                />
              </div> */}
              {/* <div className="col-12 col-md-6 ">
                <CardContent
                  imageSrc={
                    "/img/Treatments/Infertility_Treatments/Hysteroscopy.png"
                  }
                  title={"Hysteroscopy"}
                  desc={
                    "Hysteroscopy is a simple diagnostic procedure to view the cervix and the uterus for any abnormalities. This procedure is also used to remove a polyp, fibroid, and adhesions or for biopsy."
                  }
                />
              </div> */}
              {/* <div className="col-12 col-md-6 ">
                <CardContent
                  imageSrc={
                    "/img/Treatments/Infertility_Treatments/Laser Assisted Hatching (LAH).png"
                  }
                  title={"Laser Assisted Hatching (LAH)"}
                  desc={
                    "Laser Assisted Hatching is an advanced technique that ensures implantation of the embryo to the uterine wall using,before the embryo transfer. This procedure lowers the risk of miscarriage and IVF failure."
                  }
                />
              </div> */}
              {/* <div className="col-12 col-md-6 ">
                <CardContent
                  imageSrc={
                    "/img/Treatments/Infertility_Treatments/Microfluidics.png"
                  }
                  title={"Microfluidics"}
                  desc={
                    "Microfluidic Sperm Sorting is a recent advancement, where a processed semen sample is loaded on a chip with micro channels to select best quality sperm with good DNA and increase the success rate. "
                  }
                />
              </div> */}
            </div>
          </TabPane>
          <TabPane
            eventKey="advanced-treatments"
            className={
              activeKey === "advanced-treatments" ? "tab-pane-active" : ""
            }
          >
            <div className="row container justify-content-center g-4 mx-auto">
              <div className="col-12 col-md-12 ">
                <CardContent
                  imageSrc={
                    "/img/Treatments/Advanced_Treatments/DNA fragmentation index (DFI) .png"
                  }
                  title={"The classical symptoms of diabetes are"}
                  desc={
                    <>
                      <ul>
                        <li>High blood sugar</li>
                        <li>Frequent thirst</li>
                        <li>Increased appetite</li>
                        <li>Increased frequency in urination</li>
                        <li>Losing weight in spite of eating well</li>
                        <li>Tiredness</li>
                        <li>
                          Burning sensation in feet, numbness and tingling in
                          extremities
                        </li>
                      </ul>
                      <p>
                        Besides these symptoms, the increased concentration of
                        sugar in blood for a prolonged period can lead to many
                        complications like diabetic retinopathy causing vision
                        disturbances, diabetic nephropathy or kidney problems,
                        diabetic neuropathy affecting nerves which can lead to
                        problems like burning sensation or loss of sensation,
                        feeling of imbalance, ejaculation disorders in males,
                        urinary incontinence, etc. Diabetes is also a major risk
                        factor for hypertension, atherosclerosis, and heart
                        disorders. Frequent infections, poor healing of wounds,
                        and non-healing ulcers are also other complications of
                        diabetes.
                      </p>
                    </>
                  }
                />
              </div>
              {/* <div className="col-12 col-md-6 ">
                <CardContent
                  imageSrc={
                    "/img/Treatments/Advanced_Treatments/Micro TESE.png"
                  }
                  title={"Micro TESE"}
                  desc={
                    "Microscopic Testicular Sperm Extraction (MicroTESE) is a minimally-invasive surgical sperm extraction method for men with low sperm count or zero sperm count (Azoospermia). A powerful microscope is used to locate and collect sperm directly from the testes to use for IVF. "
                  }
                />
              </div> */}
              {/* <div className="col-12 col-md-6 ">
                <CardContent
                  imageSrc={"/img/Treatments/Advanced_Treatments/PGT-A .png"}
                  title={
                    "PGT-A  (Preimplantation Genetic Testing – Aneuploidy)"
                  }
                  desc={
                    "In IVF, before embryo transfer, the embryos are tested through Preimplantation Genetic testing,for any genetic or chromosomal defects and only the healthy embryos are selected to avoid the risk of miscarriage or a baby with genetic disorders."
                  }
                />
              </div> */}
              {/* <div className="col-12 col-md-6 ">
                <CardContent
                  imageSrc={"/img/Treatments/Advanced_Treatments/CAPA-IVM.png"}
                  title={"CAPA-IVM"}
                  desc={
                    "CAPA-IVM is a Drug-Free IVF treatment, only available at Oasis Fertility in India. CAPA-IVM has less number of injections, side effects, and no risk of ovarian hyper-stimulation syndrome (OHSS). It is the best option for women with PCOS, cancer, and Resistant Ovary Syndrome. "
                  }
                />
              </div> */}
              {/* <div className="col-12 col-md-6 ">
                <CardContent
                  imageSrc={
                    "/img/Treatments/Advanced_Treatments/ERA (Endometrial Receptivity Array).png"
                  }
                  title={"ERA (Endometrial Receptivity Array)"}
                  desc={
                    "In Endometrial Receptivity Array or ERA, a small sample of the endometrium is tested to identify when the uterus is most receptive, to increase the chances of implantation and pregnancy."
                  }
                />
              </div> */}
            </div>
          </TabPane>
          <TabPane
            eventKey="fertility-preservations"
            className={
              activeKey === "fertility-preservations" ? "tab-pane-active" : ""
            }
          >
            <div className="row container justify-content-center g-4 mx-auto">
              <div className="col-12 col-md-6 ">
                <CardContent
                  imageSrc={
                    "/img/Fertility_Preservations/Egg_and_Sperm_Freezing.jpg"
                  }
                  title={"Egg and Sperm Freezing"}
                  desc={
                    "Fertility preservation helps in preserving the fertility potential for people with medical conditions like cancer, or couples who are not ready to have a baby by freezing eggs, sperm, or embryos at very low temperatures. "
                  }
                />
              </div>
              <div className="col-12 col-md-6 ">
                <CardContent
                  imageSrc={
                    "/img/Fertility_Preservations/Freezing_Vitrification.jpg"
                  }
                  title={"Freezing/Vitrification"}
                  desc={
                    "Vitrification is a specialised version of fertility preservation which takes few minutes to freeze and offers better post-thaw survival and success rates. Eggs, sperm, and embryos are quickly frozen in a liquid, into a glass-like structure. "
                  }
                />
              </div>
            </div>
          </TabPane>
          <TabPane
            eventKey="donor-program"
            className={activeKey === "donor-program" ? "tab-pane-active" : ""}
          >
            <div className="row container justify-content-center g-4 mx-auto">
              <div className="col-12 col-md-6 ">
                <CardContent
                  imageSrc={"/img/Donor_Program/Donor_Sperm.jpg"}
                  title={"Donor Sperm"}
                  desc={
                    "Donor sperm offers a best option for couples struggling with infertility due to low sperm count or any other structural abnormalities in the sperm. In such cases, good quality donor sperm are used for egg fertilization."
                  }
                />
              </div>
              <div className="col-12 col-md-6 ">
                <CardContent
                  imageSrc={"/img/Donor_Program/Donor_Egg.jpg"}
                  title={"Donor Egg"}
                  desc={
                    "In women, struggling with low egg quality or poor ovarian reserve due to age or hormonal issues, using donor eggs is a good alternative. Healthy donor eggs are collected from external egg donors and used."
                  }
                />
              </div>
            </div>
          </TabPane>
        </TabContent>
      </TabContainer>
    </div>
  );
}

export default FertilitySection;
