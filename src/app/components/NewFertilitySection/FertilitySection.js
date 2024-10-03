"use client"
import React, { useRef, useEffect, useState } from 'react';
import { Tab, Tabs, TabContainer, TabContent, TabPane, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Image from 'next/image';


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
                            height={100}
                            width={100}
                        />
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <div className="card-body">
                        <p className="card-title avail-emi text-center text-md-start">{title}</p>
                        <p className="card-text text-center text-md-start">
                            {desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}



function FertilitySection({center}) {
    const navRef = useRef(null);
    const [activeKey, setActiveKey] = useState("infertility-testing");

    useEffect(() => {
        const navLinks = navRef.current.querySelectorAll('.nav-link');

        navLinks.forEach((link) => {
            link.addEventListener('click', (e) => {
                const navTabs = navRef.current;
                const tabWidth = link.offsetWidth;

                // Scroll by the width of one tab to the left
                navTabs.scrollBy({ left: tabWidth, behavior: 'smooth' });
            });
        });

        // Clean up event listeners on unmount
        return () => {
            navLinks.forEach((link) => {
                link.removeEventListener('click', null);
            });
        };
    }, []);

    return (
        <div id='f-section'>
            <h1 className="container heading-text text-black mb-3">IVF Treatment in  {center?.center_name
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}</h1>

            <TabContainer defaultActiveKey="infertility-testing" activeKey={activeKey}
                onSelect={(k) => setActiveKey(k)}>
                <Nav variant="tabs" className="container mt-3 flex-nowrap justify-content-start justify-content-md-center" ref={navRef}>
                    <Nav.Item>
                        <Nav.Link eventKey="infertility-testing">Infertility Testing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="infertility-treatments">Infertility Treatments</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="advanced-treatments">Advanced Treatments</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="fertility-preservations">Fertility Preservations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="donor-program">Donor Program</Nav.Link>
                    </Nav.Item>
                </Nav>


                <TabContent>
                    <TabPane eventKey="infertility-testing" className={activeKey === "infertility-testing" ? "tab-pane-active" : ""}>
                        <div className='row container justify-content-center g-4 mx-auto'>
                            <div className='col-12 col-md-6'>
                                <CardContent imageSrc={"/img/Infertility_Testing/Infertility_Workup.jpg"} title={"Infertility Workup"} desc={"Infertility workup is a thorough analysis that helps in understanding the possible reasons behind a couple’s fertility challenges. It plays an important role in designing a customised treatment plan for the couple. "} />
                            </div>
                            <div className='col-12 col-md-6'>
                                <CardContent imageSrc={"/img/Infertility_Testing/Semen_Analysis.jpg"} title={"Semen Analysis"} desc={"Semen analysis, a common fertility test that helps in detailed assessment of sperm health. It involves assessing semen sample for factors such as sperm count, motility, appearance and other parameters."} />
                            </div>
                            <div className='col-12 col-md-6'>
                                <CardContent imageSrc={"/img/Infertility_Testing/AMH_Testing.jpg"} title={"AMH Testing"} desc={"Egg reserve in a woman is crucial factor in estimating the fertility potential. AMH testing, a simple blood test is used to estimate Anti-Mullerian Hormone levels in the blood which indicates a woman’s egg count."} />
                            </div>
                            <div className='col-12 col-md-6'>
                                <CardContent imageSrc={"/img/Infertility_Testing/Scanning.jpg"} title={"Scanning"} desc={"Presence of any structural abnormalities in the ovaries, fallopian tubes, and uterus cause infertility. These can be detected through an abdominal ultrasound scan which creates images of the internal system."} />
                            </div>

                        </div>
                    </TabPane>
                    <TabPane eventKey="infertility-treatments" className={activeKey === "infertility-treatments" ? "tab-pane-active" : ""}>
                        <div className='row container justify-content-center g-4 mx-auto'>
                            <div className='col-12 col-md-6 '>
                                <CardContent imageSrc={"/img/Treatments/Infertility_Treatments/OITI.png"} title={"OITI - Ovulation Induction with Timed Intercourse"} desc={"OITI is a simple fertility treatment that involves safe medications to trigger ovaries for increased egg production and couple is advised to have intercourse during the best time of ovulation to increase the chances of pregnancy."} />
                            </div>
                            <div className='col-12 col-md-6 '>
                                <CardContent imageSrc={"/img/Treatments/Infertility_Treatments/IUI – Intrauterine Insemination.png"} title={"IUI – Intrauterine Insemination"} desc={"IUI is an affordable fertility treatment that involves safe medications to increase egg production and sperm sorting techniques to select healthy sperm, followed by transfer of healthy sperm into uterus during ovulation."} />
                            </div>
                            <div className='col-12 col-md-6 '>
                                <CardContent imageSrc={"/img/Treatments/Infertility_Treatments/IVF - Invitro Fertilization.png"} title={"IVF - Invitro Fertilization"} desc={"IVF, where the best egg and sperm are fertilized with advanced techniques. The ovaries are stimulated with safe medications to produce more eggs and combine with healthy sperm to create embryos."} />
                            </div>
                            <div className='col-12 col-md-6 '>
                                <CardContent imageSrc={"/img/Treatments/Infertility_Treatments/ICSI - Intra Cytoplasmic Sperm Injection.png"} title={"ICSI - Intra Cytoplasmic Sperm Injection"} desc={"ICSI, an IVF version where a healthy sperm is injected into an egg. A healthy sperm is selected with sperm and injected directly into an egg to form a healthy embryo which is transferred into the uterus. "} />
                            </div>
                            <div className='col-12 col-md-6 '>
                                <CardContent imageSrc={"/img/Treatments/Infertility_Treatments/IVM - Invitro Maturation of Oocytes.png"} title={"IVM - Invitro Maturation of Oocytes"} desc={"IVM, a specialised fertility treatment for women with PCOS. Immature eggs are collected from the ovaries, are matured in the lab and fertilized with healthy sperm to form an embryo."} />
                            </div>
                            <div className='col-12 col-md-6 '>
                                <CardContent imageSrc={"/img/Treatments/Infertility_Treatments/Laparoscopy.png"} title={"Laparoscopy"} desc={"Laparoscopy is a minimally invasive surgical procedure to check for fallopian tube blockages and for fibroids in the uterus. It is also used in treating adhesions, polyps or fibroids without the need for surgery."} />
                            </div>
                            <div className='col-12 col-md-6 '>
                                <CardContent imageSrc={"/img/Treatments/Infertility_Treatments/Hysteroscopy.png"} title={"Hysteroscopy"} desc={"Hysteroscopy is a simple diagnostic procedure to view the cervix and the uterus for any abnormalities. This procedure is also used to remove a polyp, fibroid, and adhesions or for biopsy."} />
                            </div>
                            <div className='col-12 col-md-6 '>
                                <CardContent imageSrc={"/img/Treatments/Infertility_Treatments/Laser Assisted Hatching (LAH).png"} title={"Laser Assisted Hatching (LAH)"} desc={"Laser Assisted Hatching is an advanced technique that ensures implantation of the embryo to the uterine wall using,before the embryo transfer. This procedure lowers the risk of miscarriage and IVF failure."} />
                            </div>
                            <div className='col-12 col-md-6 '>
                                <CardContent imageSrc={"/img/Treatments/Infertility_Treatments/Microfluidics.png"} title={"Microfluidics"} desc={"Microfluidic Sperm Sorting is a recent advancement, where a processed semen sample is loaded on a chip with micro channels to select best quality sperm with good DNA and increase the success rate. "} />
                            </div>
                            
                        </div>
                    </TabPane>
                    <TabPane eventKey="advanced-treatments" className={activeKey === "advanced-treatments" ? "tab-pane-active" : ""}>
                        <div className='row container justify-content-center g-4 mx-auto'>
                            <div className='col-12 col-md-6 '>
                                <CardContent imageSrc={"/img/Treatments/Advanced_Treatments/DNA fragmentation index (DFI) .png"} title={"DFI Testing "} desc={"DNA Fragmentation Index is the amount of damaged DNA in the sperm. High DFI increases the risk of miscarriage and babies born with genetic disorders. In DFI testing, a semen sample is processed and tested for the percentage of damaged DNA in sperm. "} />
                            </div>
                            <div className='col-12 col-md-6 '>
                                <CardContent imageSrc={"/img/Treatments/Advanced_Treatments/Micro TESE.png"} title={"Micro TESE"} desc={"Microscopic Testicular Sperm Extraction (MicroTESE) is a minimally-invasive surgical sperm extraction method for men with low sperm count or zero sperm count (Azoospermia). A powerful microscope is used to locate and collect sperm directly from the testes to use for IVF. "} />
                            </div>
                            <div className='col-12 col-md-6 '>
                                <CardContent imageSrc={"/img/Treatments/Advanced_Treatments/PGT-A .png"} title={"PGT-A  (Preimplantation Genetic Testing – Aneuploidy)"} desc={"In IVF, before embryo transfer, the embryos are tested through Preimplantation Genetic testing,for any genetic or chromosomal defects and only the healthy embryos are selected to avoid the risk of miscarriage or a baby with genetic disorders."} />
                            </div>
                            <div className='col-12 col-md-6 '>
                                <CardContent imageSrc={"/img/Treatments/Advanced_Treatments/CAPA-IVM.png"} title={"CAPA-IVM"} desc={"CAPA-IVM is a Drug-Free IVF treatment, only available at Oasis Fertility in India. CAPA-IVM has less number of injections, side effects, and no risk of ovarian hyper-stimulation syndrome (OHSS). It is the best option for women with PCOS, cancer, and Resistant Ovary Syndrome. "} />
                            </div>
                            <div className='col-12 col-md-6 '>
                                <CardContent imageSrc={"/img/Treatments/Advanced_Treatments/ERA (Endometrial Receptivity Array).png"} title={"ERA (Endometrial Receptivity Array)"} desc={"In Endometrial Receptivity Array or ERA, a small sample of the endometrium is tested to identify when the uterus is most receptive, to increase the chances of implantation and pregnancy."} />
                            </div>
                        </div>
                    </TabPane>
                    <TabPane eventKey="fertility-preservations" className={activeKey === "fertility-preservations" ? "tab-pane-active" : ""}>
                        <div className='row container justify-content-center g-4 mx-auto'>
                            <div className='col-12 col-md-6 '>
                                <CardContent imageSrc={"/img/Fertility_Preservations/Egg_and_Sperm_Freezing.jpg"} title={"Egg and Sperm Freezing"} desc={"Fertility preservation helps in preserving the fertility potential for people with medical conditions like cancer, or couples who are not ready to have a baby by freezing eggs, sperm, or embryos at very low temperatures. "} />
                            </div>
                            <div className='col-12 col-md-6 '>
                                <CardContent imageSrc={"/img/Fertility_Preservations/Freezing_Vitrification.jpg"} title={"Freezing/Vitrification"} desc={"Vitrification is a specialised version of fertility preservation which takes few minutes to freeze and offers better post-thaw survival and success rates. Eggs, sperm, and embryos are quickly frozen in a liquid, into a glass-like structure. "} />
                            </div>

                        </div>
                    </TabPane>
                    <TabPane eventKey="donor-program" className={activeKey === "donor-program" ? "tab-pane-active" : ""}>
                        <div className='row container justify-content-center g-4 mx-auto'>
                            <div className='col-12 col-md-6 '>
                                <CardContent imageSrc={"/img/Donor_Program/Donor_Sperm.jpg"} title={"Donor Sperm"} desc={"Donor sperm offers a best option for couples struggling with infertility due to low sperm count or any other structural abnormalities in the sperm. In such cases, good quality donor sperm are used for egg fertilization."} />
                            </div>
                            <div className='col-12 col-md-6 '>
                                <CardContent imageSrc={"/img/Donor_Program/Donor_Egg.jpg"} title={"Donor Egg"} desc={"In women, struggling with low egg quality or poor ovarian reserve due to age or hormonal issues, using donor eggs is a good alternative. Healthy donor eggs are collected from external egg donors and used."} />
                            </div>
                        </div>
                    </TabPane>
                </TabContent>
            </TabContainer>
        </div>
    );
}

export default FertilitySection;
