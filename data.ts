import { Award, GalleryItem, LocalizedContent, Patent, Project, Publication, SkillCategory, TimelineItem, SocialLinks } from "./types";

export const socialLinks: SocialLinks = {
  email: "luchengbang@caas.cn",
  phone: "+86 13138271451", 
  wechat: "LurSingpong", 
  x: "https://x.com/LuSingpong", 
  linkedin: "https://linkedin.com/in/chengbang-lu", 
  instagram: "https://instagram.com/chengbang", 
  researchGate: "https://www.researchgate.net/scientific-contributions/Chengbang-Lu-2279008506"
};

export const content: Record<string, LocalizedContent> = {
  en: {
    nav: {
      home: "Home",
      experience: "Experience",
      publications: "Publications",
      patents: "Patents",
      awards: "Awards",
      skills: "Skills",
      gallery: "Gallery",
      contact: "Contact"
    },
    hero: {
      role: "Research Assistant",
      labName: "Sustainable ＆ Bioinspired Materials Lab",
      labUrl: "https://www.x-mol.com/groups/liangxiangyu?lang=en",
      labConnector: ",",
      intro: "I bridge the gap between mechanic engineering and biological applications, creating novel solutions for biomedical challenges.",
      downloadCv: "Download Resume",
      aboutTitle: "About Me",
      aboutDesc: "I am a dedicated researcher with a passion for interdisciplinary innovation. Originally from Foshan, Guangdong, I am a native Cantonese speaker. My work combines advanced manufacturing, materials science, and electronics to create bio-integrated devices. To date, I have published 4 papers, including 2 featured as cover articles and 2 as first/co-first author. In 2026, I have manuscripts under review at <i>Science Advances</i> and under revision at <i>Exploration</i>, alongside 2 Chinese invention patents under examination.",
      researchAreasTitle: "Research Focus",
      backToHome: "Back to Home"
    },
    sectionTitles: {
      education: "Education",
      experience: "Research Experience",
      publications: "Publications",
      awards: "Honors & Awards",
      patents: "Patents",
      skills: "Technical Skills",
      projects: "Engagement Programme",
      gallery: "Life & Moments"
    },
    researchAreas: [
      {
        id: "ra1",
        title: "Bionic Structure Design",
        description: "Exploring biomaterials inspired by natural structures or behaviors to create materials with exceptional performance, such as bionic barb drug delivery devices, bionic impact-resistant hydrogels, and bionic preservation strategies.",
        relatedPublicationIds: ["pub2", "pub3", "pub4", "pub8"]
      },
      {
        id: "ra2",
        title: "Ingestible Devices",
        description: "Develop smart swallowable devices for non-invasive monitoring, drug delivery, and disease treatment within the esophagus and gastrointestinal tract, with a focus on safety, retention, and long-term functionality, aiming to achieve closed-loop disease management.",
        relatedPublicationIds: ["pub2"]
      },
      {
        id: "ra3",
        title: "3D Printing Technologies",
        description: "Innovating in additive manufacturing to enable the precise fabrication of conformal bio-electronics and complex microstructures using novel composite bio-inks.",
        relatedPublicationIds: ["pub6", "pub5", "pub7"]
      }
    ]
  },
  zh: {
    nav: {
      home: "首页",
      experience: "经历",
      publications: "论文",
      patents: "专利",
      awards: "奖项",
      skills: "技能",
      gallery: "画廊",
      contact: "联系我"
    },
    hero: {
      role: "研究助理",
      labName: "可持续与仿生材料实验室",
      labUrl: "https://www.x-mol.com/groups/liangxiangyu?lang=en",
      labConnector: "，",
      intro: "致力于弥合机械工程与生物应用之间的鸿沟，为生物医学挑战创造创新的解决方案。",
      downloadCv: "下载简历",
      aboutTitle: "关于我",
      aboutDesc: "我是一位致力于跨学科创新的研究人员。作为广东佛山人，我以粤语为母语。我的工作融合了先进制造、材料科学和电子技术，致力于采用仿生策略开发生物集成设备。目前已发表论文4篇，其中2篇被选为封面文章，2篇为第一作者或共同第一作者。此外，2026年有2篇论文分别在 <i>Science Advances</i> 审稿及 <i>Exploration</i> 返修中，另有2项中国发明专利在实质审查中。",
      researchAreasTitle: "研究方向",
      backToHome: "返回首页"
    },
    sectionTitles: {
      education: "教育背景",
      experience: "研究经历",
      publications: "论文",
      awards: "荣誉奖项",
      patents: "发明专利",
      skills: "专业技能",
      projects: "参与项目",
      gallery: "生活瞬间"
    },
    researchAreas: [
      {
        id: "ra1",
        title: "仿生结构设计",
        description: "探索受自然结构或行为启发的生物材料，以创造具有卓越性能的材料，例如仿生倒钩药物输送装置、仿生抗冲击水凝胶和仿生保鲜策略。",
        relatedPublicationIds: ["pub2", "pub3", "pub4", "pub8"]
      },
      {
        id: "ra2",
        title: "可吞咽设备",
        description: "开发用于食道和胃肠道内非侵入性监测、药物输送和疾病治疗的智能可吞咽设备，重点关注安全性、滞留和长期功能，旨在实现闭环疾病管理。",
        relatedPublicationIds: ["pub2"]
      },
      {
        id: "ra3",
        title: "3D打印技术",
        description: "革新增材制造技术，利用新型复合生物墨水实现共形生物电子和复杂微结构的精确制造。",
        relatedPublicationIds: ["pub6", "pub5", "pub7"]
      }
    ]
  }
};

export const educationData: TimelineItem[] = [
  {
    id: "edu1",
    role: "BS in Applied Internet of Things Engineering",
    institution: "Foshan University, School of Electronic Information Engineering",
    period: "Sep 2019 - Jun 2023",
    description: ""
  }
];

export const experienceData: TimelineItem[] = [
  {
    id: "exp1",
    role: "Research Assistant",
    institution: "Shenzhen Institute of Genomics (AGIS), CAAS",
    supervisor: "Prof. Xiangyu Liang",
    period: "Jun 2023 - Present",
    description: "Biomaterials Center. Research on bionic structure design and ingestible devices.",
    affiliation: "Chinese Academy of Agricultural Sciences"
  },
  {
    id: "exp2",
    role: "Visiting Student",
    institution: "Shenzhen Institute of Genomics (AGIS), CAAS",
    supervisor: "Prof. Xiangyu Liang",
    period: "Mar 2023 - Jun 2023",
    description: "Biomaterials Center. Research on bionic structure design and application.",
    affiliation: "Chinese Academy of Agricultural Sciences"
  },
  {
    id: "exp3",
    role: "Project Leader, Research and Development of Academic Fund Project",
    institution: "Information Technology Teaching Laboratory, Foshan University",
    supervisor: "Xiaohua Li",
    period: "Mar 2022 - Aug 2022",
    description: "Research and Development of Academic Fund Project.",
    affiliation: "Foshan University"
  }
];

const loremAbstract = "This is a placeholder abstract. The research presented in this paper explores novel methodologies and applications in the field of bio-integrated electronics. We demonstrate significant improvements in durability, biocompatibility, and functionality compared to existing solutions. The results pave the way for next-generation medical devices and smart materials.";

export const publicationsData: Publication[] = [
  {
    id: "pub2",
    title: "A Fully-sustainable, Programmable and Self-triggering Gastric Device Enabling Long-acting Oral Delivery of Macromolecules",
    authors: "Chengbang Lu#, Hongyan Yuan#, Haoying Wang#, Kewen Lei, Weijie Li, Xianglin Wu, Weixuan Liu, Yunxiang Zhang, Teng Dong, Kai Wu, Yaoben Wang, Shuquan Cui, Yue Zhao, Yingning He, U Kei Cheang, Tian Liu, Yancong Zhang, Tianyuan Ci, Yiyuan Yang*, Xiangyu Liang*",
    journal: "Science Advances",
    year: "2026",
    status: "Under Review",
    abstract: "Oral administration is the most convenient and patient-compliant route for drug delivery. However, the harsh and dynamic environment of the gastrointestinal (GI) barriers severely hinders oral bioavailability, and non-degradable delivery system design exacerbates medical pollution. To integrate therapeutic efficiency and environmental responsibility, here we developed an orally administrated capsule device, fully made by biodegradable materials, termed the Sustainable Gastric Self-Triggered Device (SGSTD), inspired by the stinging mechanism of Apis mellifera. Upon reaching the stomach, SGSTD autonomously triggers a biodegradable barbed needle that anchors into the gastric tissue and sustainably delivers therapeutics over an extended period. By engineering the drug-loaded needles with tunable microchannel architectures, differential degradation rates, and temperature-sensitive materials, the system enables programmable drug release to personalize therapeutic outcomes. In porcine ex-vivo and in-vivo models, SGSTD further confirmed its safety, retention, and pharmacological efficacy. In diabetic pigs, the device sustained insulin release for over 7 days, achieving a bioavailability of up to 63.8%, significantly outperforming that of subcutaneous injections and conventional oral delivery (~ 100 × increase). Importantly, SGSTD offers a fully biodegradable, cost‑effective (≤ $2.31 per unit), and scalable platform enable its potential clinical translation for versatile oral biologics delivery and broader global health impact.",
    coverUrl: "https://i.postimg.cc/FKT0KhwJ/zi-yuan-13.png"
  },
  {
    id: "pub4",
    title: "A Food Fresh-keeping Strategy Inspired by Calyx of <i>Physalis Peruviana</i>",
    authors: "Yue Zhao#, Chengbang Lu#, Xiaopeng Bai#, Shangyi Wu, Zeyu Wang, Yuqin Hu, Binxin Liang, Danlei Sun, Yunxiang Zhang, Yingning He, Shengwen Duan, Taolin Sun, Xinjie Wang, Weijie Lan, Hong Zhang*, Yang Luo*, Xiangyu Liang*",
    journal: "Exploration",
    year: "2026",
    status: "Under Revision",
    abstract: "Addressing the dual threats of foodborne illness and plastic pollution to global health, we present a sprayable, calyx-inspired food wrap engineered for safety and sustainability. Utilizing handheld electrospraying (HED), zeolite-doped polycaprolactone forms a multi-scale network mimicking Physalis peruviana’s protective structure. This material provides a health-critical barrier: it achieves >95% inhibition of common foodborne viruses (e.g., norovirus surrogates) and >92% antibacterial efficacy against pathogens like E. coli and L. monocytogenes, while maintaining high breathability (~1500 g/m²·day) to prevent food spoilage. Crucially, the wrap is non-toxic and fully biodegradable within 180 days, eliminating microplastic risks. In real-world validation, it extended the shelf life of perishable fruits by >7 days without quality loss, reducing food waste. Life cycle assessment confirmed an 84.97% reduction in CO2 emissions compared with conventional wraps, directly contributing to environmental health. By integrating user-friendly application, enhanced food safety, and rapid environmental degradation, this technology offers a scalable solution for sustainable nutrition security.",
    coverUrl: "https://i.postimg.cc/mZtSvPhs/zi-yuan-17.png"
  },
  {
    id: "pub3",
    title: "A Protein-managed Hydrogel Biomimicked by Insect Cuticle Enabling Ultra-durable Impact Resistance",
    authors: "Kai Wu#, Chengbang Lu#, Fenghou Yuan#, Binghui Song#, Kewen Lei, Zeyu Wang, Haoying Wang, Liang Peng, Huitang Qi, Hongchao Ji, U K. Cheang, Huawei Zhang, Taolin Sun, Ji Liu, Tian Liu*, Xiangyu Liang*",
    journal: "Advanced Materials",
    year: "2026",
    status: "e19427 (Inside Front Cover, Issue April 17)",
    abstract: "The insect cuticle exhibits a diverse array of intricate microstructures, each possessing distinctly different mechanical properties, ranging from rigid components such as head capsules and mandibles to softer structures like larval integuments and intersegmental membranes. While the variations in mechanical properties are attributed to differences in structural protein composition, the specific proteins involved and their corresponding mechanisms remain largely elusive. Here, Ostrinia furnacalis cuticular protein hypothetical-2 (Of CPH-2) is identified as a highly abundant key structural protein that is closely linked to the development of the endocuticle within the head capsule of Ostrinia furnacalis. Utilizing a straightforward yet effective binary solvent-induced strategy involving chitin and OfCPH-2, the hierarchically structured endocuticle is successfully replicated. Rational engineering of the lamellar structure formation and energy dissipation, surprisingly and reasonably facilitated by OfCPH-2, contributes synergistically to an unprecedented ultra-durable impact resistance (≈23,534 J·m−2, ≈1,032 × increase). This structure parallels that of the natural lamellar endocuticle found in head capsules, enabling exceptional structural stability under localized mechanical stresses. Applying this biomimetic cuticle in intelligent agricultural drones has significantly enhanced their sustainability, easy-to-process, and stability (≈600% × increase) within visual recognition systems for pests, underscoring its promising potential as protective gear akin to natural cuticles.",
    imageUrl: "https://i.postimg.cc/FKCYMkgy/webue-20251117-36921763386066735.png",
    coverUrl: "https://i.postimg.cc/SxgQRX1C/Wechat-IMG1878.jpg",
    doi: "https://doi.org/10.1002/adma.202519427"
  },
  {
    id: "pub6",
    title: "In Situ 3D Printing of Conformal Bioflexible Electronics via Annealing PEDOT:PSS/PVA Composite Bio-Ink",
    authors: "Xuegui Zhang, Chengbang Lu, Yunxiang Zhang, Zixi Cai, Yingning He*, Xiangyu Liang*",
    journal: "Polymers",
    year: "2025",
    status: "17(11), 1479",
    abstract: "High-performance flexible sensors capable of direct integration with biological tissues are essential for personalized health monitoring, assistive rehabilitation, and human–machine interaction. However, conventional devices face significant challenges in achieving conformal integration with biological surfaces, along with sufficient biomechanical compatibility and biocompatibility. This research presents an in situ 3D biomanufacturing strategy utilizing Direct Ink Writing (DIW) technology to fabricate functional bioelectronic interfaces directly onto human skin, based on a novel annealing PEDOT:PSS/PVA composite bio-ink. Central to this strategy is the utilization of a novel annealing PEDOT:PSS/PVA composite material, subjected to specialized processing involving freeze-drying and subsequent thermal annealing, which is then formulated into a DIW ink exhibiting excellent printability. Owing to the enhanced network structure resulting from this unique fabrication process, films derived from this composite material exhibit favorable electrical conductivity (ca. 6 S/m in the dry state and 2 S/m when swollen) and excellent mechanical stretchability (maximum strain reaching 170%). The material also demonstrates good adhesion to biological interfaces and high-fidelity printability. Devices fabricated using this material achieved good conformal integration onto a finger joint and demonstrated strain-sensitive, repeatable responses during joint flexion and extension, capable of effectively transducing local strain into real-time electrical resistance signals. This study validates the feasibility of using the DIW biomanufacturing technique with this novel material for the direct on-body fabrication of functional sensors. It offers new material and manufacturing paradigms for developing highly customized and seamlessly integrated bioelectronic devices.",
    coverUrl: "https://mdpi-res.com/polymers/polymers-17-01479/article_deploy/html/images/polymers-17-01479-g001-550.jpg",
    doi: "https://doi.org/10.3390/polym17111479"
  },
  {
    id: "pub5",
    title: "High-precision 3D Printing by Deploying Expandable Microspheres",
    authors: "Yang Xu, Fucheng Wang, Pei Zhang, Chengbang Lu, Weixuan Liu, Yueying Guo, Zhipeng Ni, Jinqing Wang, Baoyang Lu, Qin Lou, Xiangyu Liang*, Ji Liu*",
    journal: "Cell Reports Physical Science",
    year: "2024",
    status: "5(8), 102113",
    abstract: "Stereolithography-based three-dimensional (3D) printing technology is widely employed in various industries, including manufacturing, healthcare, energy, biomedical, art, and other fields. However, precision issues, such as dimensional shrinkage and structural warping, significantly hinder its wide application. In this study, we present a straightforward and efficient yet general strategy to enhance structural fidelity by incorporating thermally expandable microspheres into photosensitive resins. We found that this reduction substantially mitigates the volume shrinkage below 3.98% compared to over 10% for commercial photosensitive resins. Precision improves significantly, with dimensional deviation at just 0.035% compared to over 0.1% with commercial options. Furthermore, due to the low filling ratio, the improvement in 3D printing precision did not affect the mechanical properties; thus, it does not affect applications where those photosensitive resins are originally targeted. Our method represents an effective strategy to improve the 3D printing resolution of photosensitive resins, thus opening directions for high-precision 3D printing technology.",
    imageUrl: "https://i.postimg.cc/gJ5GDvqp/webue-20240604-34701717504471060.png",
    coverUrl: "https://i.postimg.cc/FKFfn58j/webue-20240808-16161723110025705.jpg",
    doi: "https://doi.org/10.1016/j.xcrp.2024.102113"
  },
  {
    id: "pub1",
    title: "Intelligent Display Bracket Based on Ali Cloud IoT Platform",
    authors: "Chengbang Lu#, Xiaohua Li",
    journal: "SSCE",
    year: "2022",
    status: "",
    abstract: "This work proposes a display stand based on the Ali cloud IoT platform, combined with esp8266 master control chip control, utilizing the Ali cloud IoT platform as an MQTT server, using Wi-Fi, hardware for data transmission, by publishing and subscribing to mobile terminals, to accomplish wireless control of fixed display stand, solve the user to keep a fixed posture facing the screen for a long time, manually adjust the display problem, and enhance efficiency. Following testing, the system may steadily adjust the location of the mobile monitor as required. Control the gadget with a WeChat applet for some degree of practicality, ease, and promising application.",
    coverUrl: "https://i.postimg.cc/xTn1wp2P/image.png",
    doi: "https://doi.org/10.25236/ssce.2022.001"
  },
  {
    id: "pub7",
    title: "In-situ Conformal Hydrogel Electronics enabling Precision Sensing on Complex Biological Interfaces",
    authors: "Chengbang Lu#, Xuegui Zhang#, Yunxiang Zhang#, Junfeng Chen, Xiao Wang, Peishan Wu, Hongyan Yuan, Weibin Zhu, Shiqi Sun, Yuqin Hu, Shengwen Duan, Liyuan Wang, Changhong Linghu, Changshun Ruan, Wenyu Wang, Yao Wang, Yiyuan Yang, Yingning He*, Xiangyu Liang*",
    journal: "Pending Submission",
    year: "",
    status: "Pending Submission",
    abstract: "Flexible bioelectronic interfaces are essential for high-quality physiological sensing, yet achieving stable electrical coupling on soft, irregular and dynamically deforming biological tissues remains a persistent challenge due to interfacial mismatch and insufficient conformability. Here, we report a personalized in-situ 3D conformal printing strategy that enables direct fabrication of high-performance hydrogel electrodes on complex, multi-curvature biological surfaces. We develop a multifunctional conductive hydrogel ink, comprising PEDOT:PSS, polyethylene glycol (PEG) and mussel-inspired adhesive proteins that synergistically integrates high electrical conductivity, tissue-matched mechanical compliance and robust wet adhesion. The ink exhibits finely tunable rheological behavior and high-resolution printability, while PEG-induced phase separation restructures the PEDOT:PSS nanomorphology into a highly interconnected conductive network, yielding low interfacial impedance and durable electrochemical stability. Coupled with an adaptive surface-aware path-projection algorithm, this approach enables precise, in-situ printing of electrodes and circuits across convex, concave and multi-curvature geometries, including living organs, achieving a level of ultra-conformality that surpasses even state-of-the-art ultra-soft (< ~10 Pa) elastomeric and hydrogel-based flexible electronics. In cortical recordings, the conformally printed hydrogel electrodes significantly outperform commercial flexible electrodes, exhibiting nearly twofold enhancement in δ-band (0.5-4 Hz) power spectral density (PSD), an improved signal-to-noise ratio of ~18 dB, and stable long-term monitoring. The platform further enables reliable capture of mechanically and optically evoked cortical potentials, revealing distinct stimulus-locked oscillatory activity around 7 Hz. Together, this work establishes an integrated materials-manufacturing paradigm for true conformal bioelectronics, enabling reliable and individualized precision sensing on complex biological interfaces, and opening pathways toward personalized neural interfaces, advanced brain-machine communication and next-generation bioelectronic medicine.",
    coverUrl: "https://i.postimg.cc/vHntmCWj/zi-yuan-14.png"
  },
  {
    id: "pub8",
    title: "Spatiotemporally Gated CRISPR Platform for Ultra-Sensitive POCT",
    authors: "Shangyi Wu#, Chengbang Lu#, Liwen Li#, Xinyi Liu, Yanwen Liu, Xiaodan Lai, Jieyu Cui, Jin Zhou, Junjie Pan, Tenghui Dai, Lulu Zhang, Wentao Lu, Jiade Yang, Yuqin Hu, Ting Shi, Lijun Hao, Shuqi Xiao, Guobin Mao, Yingxin Ma, Junbiao Dai*, Xiangyu Liang*, Xinjie Wang*",
    journal: "Pending Submission",
    year: "",
    status: "Pending Submission",
    abstract: "CRISPR-based nucleic acid detection platforms have revolutionized molecular diagnostics with their speed and accuracy. However, most CRISPR systems that integrate amplification in a one-pot format face challenges such as amplicon interference, reduced sensitivity, and limitation in point-of-care testing (POCT) applications. Inspired by compartmentalization in cells, where the cell membrane regulates molecular transport with spatiotemporal precision, we develop a cell membrane-mimicking anisotropic PVA hydrogel based isothermal nucleic acid amplification (INA) CRISPR detection one-pot (CAN-D) platform. This system enables spatiotemporal control of CRISPR activation after amplicons accumulation, preventing premature cis-cleavage and reducing mutual interference between amplification and cleavage. Notably, we engineered a novel Cas12a variant (Mut2-Q) with optimized cis/trans cleavage activities, resulting in enhanced fluorescence signal quantification. Additionally, we developed an artificial intelligence-assisted POCT device for accurate fluorescence readout. The CAN-D platform effectively mitigates mutual interference in one-pot assays, achieving up to 1000-fold increase in fluorescence signals compared to conventional methods, with a detection limit as low as 2 copies/μL in 30 minutes and 97.5% accuracy. Notably, it offers sensitive detection of bacterial pathogens, viral DNA (monkeypox, avian influenza), and genetic markers like FLT3 D835Y SNPs (0.1% frequency) and HPV16/18. Validation with 150 marine and clinical samples confirmed full concordance with qPCR and Sanger sequencing. In conclusion, CAN-D offers a sensitive, universal, intelligent and field-deployable detection platform, greatly advancing molecular diagnostics in medical settings.",
    coverUrl: "https://i.postimg.cc/vBDWwKYP/zi-yuan-15.png"
  },
  {
    id: "pub9",
    title: "A Dual-Mode Nanozyme Platform Derived from Bimetallic MOFs for On-Site Pesticide Residue Detection",
    authors: "Yunxiang Zhang#, Chengbang Lu#, Binxin Liang#, Yuqin Hu, Zede Yi, Tiancong Zhao, Yuwei Ren*, Yingning He*, Xiangyu Liang*",
    journal: "Pending Submission",
    year: "",
    status: "Pending Submission",
    abstract: "Rapid and accurate in situ detection of pesticide residues is critically important for environmental safety and precision agriculture management; however, its practical application remains constrained by complicated sample pretreatment, insufficient sensitivity, and strong dependence on bulky instrumentation. Herein, a dual-mode sensing platform based on a bimetallic metal–organic framework–derived single-atom nanozyme (CoSA@BiMOF) was constructed for the highly sensitive on-site detection of a representative carbamate pesticide, carbosulfan. The nanozyme efficiently catalyzes hydrogen peroxide decomposition via highly dispersed Co single-atom active sites, thereby driving the oxidation of o-phenylenediamine (OPD) and generating synergistic colorimetric and fluorescent signal outputs. Upon acidic hydrolysis of carbosulfan, cleavage of the N–S bond produces sulfur-containing products (–SH), which simultaneously scavenge hydroxyl radicals (•OH) in the reaction system and selectively inhibit the Co single-atom active sites. This process establishes a synergistic dual-inhibition amplification mechanism involving “radical quenching–active-site blocking,” thereby markedly enhancing both detection sensitivity and selectivity. Based on this mechanism, the proposed system achieved limits of detection of 8.6 nM and 3.9 nM in the colorimetric and fluorescent modes, respectively, while exhibiting a wide dynamic range and excellent anti-interference capability. Furthermore, by leveraging the optical stability of the material system and its dual-mode signal characteristics, an integrated terminal detection device (CUBE, Carbosulfan User-friendly Biosensing Equipment) was developed to enable standardized optical pathways and on-device signal readout, thereby validating the feasibility of on-site detection in complex environmental samples. This study not only reveals the unique advantages of MOF-derived single-atom nanozymes in inhibition-based sensing strategies, but also provides a new design paradigm for high-performance and scalable materials and systems for in situ pesticide residue detection.",
    coverUrl: "https://i.postimg.cc/B6txfzZ0/zi-yuan-16.png"
  },
  {
    id: "pub10",
    title: "Long-lasting anti-microbial fabric substrate enables free-clean electronics",
    authors: "Yuqing Hu#, Chengbang Lu#, Yanchun Deng, Yongbiao Mu, Zede Yi, Yunxiang Zhang, Shiqi Sun, Qi Yang, Yingning He, Xiang Yao, Chunsheng Hou, Shengwen Duan*, Xiangyu Liang*",
    journal: "Pending Submission",
    year: "",
    status: "Pending Submission",
    abstract: "Flexible electronic substrates hold promise for continuous health monitoring, wound care, and smart medical applications, yet their long-term stability remains constrained by inadequate breathability and the absence of durable, reliable antimicrobial properties. To overcome this critical bottleneck, this research proposes a molecularly coordinated, long-lasting antimicrobial flexible electronic substrate (Zn-IT) based on cotton fabric. This substrate utilizes the strong coordination interaction between zinc ions and cellulose hydroxyl groups to construct a stable Zn-O-C complex network within the fibers. This allows zinc ions to be uniformly embedded and permanently fixed at the molecular scale, enabling the material to possess both mechanical durability and sustained antimicrobial capability. Results reveal that this organic-inorganic synergistic structure not only preserves the fabric's inherent softness, but also significantly enhances its abrasion resistance, aging resistance, dyeability, and washability, ensuring high stability even under frequent bending and usage conditions. Antimicrobial and antiviral testing demonstrated that Zn-IT exhibits potent inhibitory effects against multiple bacteria, fungi, and viruses, with antimicrobial activity (~ 98 %) remaining at high levels even longterm ( > 30 days) continuous use. Animal studies further confirmed its excellent skin biocompatibility and anti-inflammatory properties, showing no significant irritation or tissue damage during prolonged skin contact. Moreover, the proposed coordination-embedding strategy features a straightforward process suitable for roll-to-roll mass production, coupled with advantages such as low cost and sustainable raw materials. This design concept provides a sustainable and industrializable material pathway for developing flexible electronic substrates with long-lasting antimicrobial properties, safety, and durability. It establishes a new foundation for the long-term reliable operation of flexible electronics in medical health, smart textiles, and other bio-related applications.",
    coverUrl: "https://i.postimg.cc/tJxWYVVK/zi-yuan-12.png"
  }
];

export const awardsData: Award[] = [
  { id: "a1", title: "Outstanding Employee of Shenzhen Institute of Agricultural Genomics, CAAS", year: "2024" },
  { id: "a2", title: "Excellent Award, 2023 Shenzhen Jiangxin Cup Staff Innovation Competition" },
  { id: "a3", title: "Third Prize, 2023 Dapeng Shenzhen Jiangxin Cup (Chronic Diabetes Device)" },
  { id: "a4", title: "Third Prize, 2023 Dapeng Shenzhen Jiangxin Cup (Drone Application)" },
  { id: "a5", title: "Project 100 Stars Scholarship" },
  { id: "a6", title: "Awarded title of 'Three Good Students'" },
  { id: "a7", title: "The third prize in South China of Wechat Mini Program of China University Student Computer Development Competition", year: "2020" },
  { id: "a8", title: "The bronze medal in the provincial competition of the Internet+ Innovation and Entrepreneurship Competition for University Students" }
];

export const patentsData: Patent[] = [
    {
        id: "pat1",
        title: "A method for manufacturing impact-resistant intelligent UAV and its application",
        authors: "Xiangyu Liang, Kai Wu, Chengbang Lu",
        type: "China Invention Patent",
        year: "2024",
        number: "NO:2024105501861",
        status: "Undergoing Review"
    },
    {
        id: "pat2",
        title: "Preparation method of gastric retention drug delivery device and its application",
        authors: "Xiangyu Liang, Chengbang Lu, Kai Wu",
        type: "China Invention Patent",
        year: "2024",
        number: "NO:202410549789X",
        status: "Undergoing Review"
    }
];

export const skillsData: Record<string, SkillCategory[]> = {
  en: [
    {
      category: "3D Tech & Modeling",
      items: ["FDM/DLP/SLA/DIW Printing", "SolidWorks", "Abaqus (FEA)"]
    },
    {
      category: "Software & Hardware",
      items: ["Machine Learning Models (CNN, MobileNetV2)", "C", "Python", "JavaScript", "R", "Arduino", "Circuit Soldering"]
    },
    {
      category: "Material Preparation & Characterization",
      items: ["Aligned Hydrogel Preparation", "Mechanical Testing (Puncture, Compression, Tensile, 3-Point Bending)", "Adhesion Testing (Lap Shear, Peeling)", "FT-IR", "Rheology", "SAXS/WAXS", "Nano-indentation"]
    },
    {
      category: "Biological Analysis & <i>In Vivo</i> Studies",
      items: ["Molecular Dynamics Analysis", "CT Reconstruction & Rendering", "Animal Experiments (Anesthesia, Anatomy, Sampling)", "Blood Routine Analysis", "Pharmacokinetics Analysis", "Drug Bioavailability Calculation"]
    },
    {
      category: "Visual & Design",
      items: ["Scientific Illustration", "Photo Editing", "Model Rendering", "Video Editing", "Animation"]
    },
    {
      category: "Proficient Software",
      items: ["Adobe Illustrator", "Premiere Pro", "Photoshop", "After Effects", "Origin", "Prism", "PyMOL", "ChimeraX", "KeyShot", "C4D", "VESTA", "ChemDraw", "RStudio"]
    }
  ],
  zh: [
    {
      category: "3D 技术与建模",
      items: ["FDM/DLP/SLA/DIW 打印", "SolidWorks", "Abaqus (有限元分析)"]
    },
    {
      category: "软件与硬件",
      items: ["机器学习模型搭建 (CNN, MobileNetV2)", "C语言", "Python", "JavaScript", "R语言", "Arduino", "电路焊接"]
    },
    {
      category: "材料制备与表征",
      items: ["定向取向水凝胶制备", "力学机械性能测试 (穿刺, 压缩, 拉伸, 三点弯曲)", "粘附力学性能测试 (搭接剪切, 剥离)", "FT-IR", "流变", "SAXS/WAXS", "纳米压痕"]
    },
    {
      category: "生物分析与动物实验",
      items: ["分子动力学分析", "CT重构渲染分析", "动物实验 (麻醉, 解剖, 取材)", "血常规分析", "药物动力学分析", "药物利用率计算"]
    },
    {
      category: "视觉与设计",
      items: ["科研绘图设计", "修图", "模型渲染", "视频处理及剪辑", "动画制作"]
    },
    {
      category: "擅长的软件",
      items: ["Adobe Illustrator", "PR", "PS", "AE", "Origin", "Prism", "PyMOL", "ChimeraX", "KeyShot", "C4D", "VESTA", "ChemDraw", "RStudio"]
    }
  ]
};

export const projectsData: Project[] = [
  { id: "p4", title: "Guangdong Provincial Science and Technology Plan Project -- Special Topic of Joint Funding for Scientific and Technological Innovation between Guangdong and Macao", code: "2025" },
  { id: "p5", title: "Guangdong Provincial Natural Science Foundation -- General Project", code: "2024" },
  { id: "p1", title: "National Natural Science Foundation of China", code: "No. 31871959, 32170502, 32161133010, 31900046, 82372269" },
  { id: "p2", title: "National Natural Science Foundation of Hunan Province", code: "S2023JJQNJJ1176" },
  { id: "p3", title: "National Natural Science Foundation of Guangdong Province", code: "2020A1515110288" },
];

export const galleryData: GalleryItem[] = [
  { 
    id: "g_website_launch", 
    title: "Personal Website Launch", 
    coverUrl: "https://i.postimg.cc/sf0SZ8k2/me.png", 
    date: "Feb 2026",
    description: "Personal website诞生！ The launch of my personal academic portfolio.",
    images: [
        "https://i.postimg.cc/sf0SZ8k2/me.png"
    ]
  },
  { 
    id: "g_2025_tb", 
    title: "Team Building 2025", 
    coverUrl: "https://i.postimg.cc/yxvtjBzR/webue-20250704-90541751621351551.png", 
    date: "2025",
    description: "Annual team building event strengthening our bonds and collaboration.",
    images: [
        "https://i.postimg.cc/yxvtjBzR/webue-20250704-90541751621351551.png"
    ]
  },
  { 
    id: "g_jiangxin_excellent", 
    title: "Jiangxin Cup Excellent Award", 
    coverUrl: "https://i.postimg.cc/50LJ92kn/Snipaste-2026-02-15-01-00-32.png", 
    date: "2024",
    description: "Obtained the Excellent Award at the '2023 Shenzhen Jiangxin Cup Staff Innovation and Quality Technology Achievement Competition'.",
    images: [
        "https://i.postimg.cc/50LJ92kn/Snipaste-2026-02-15-01-00-32.png",
        "https://www.x-mol.com/showImage/showUeImage?fileSource=upload:webue/20240418/69741713419197546.png"
    ]
  },
  { 
    id: "g_jiangxin_third", 
    title: "Jiangxin Cup Third Prize", 
    coverUrl: "https://i.postimg.cc/y8psv5RH/Snipaste-2026-02-15-01-00-57.png", 
    date: "2023",
    description: "Won Third Prize at the '2023 Shenzhen Jiangxin Cup Staff Innovation and Quality Technology Achievement Competition' finals.",
    images: [
        "https://i.postimg.cc/y8psv5RH/Snipaste-2026-02-15-01-00-57.png"
    ]
  },
  { 
    id: "g_2023_innov", 
    title: "Innovation Competition Defense", 
    coverUrl: "https://i.postimg.cc/W4v8dKQK/webue-20231128-34091701154445542.jpg", 
    date: "2023",
    description: "Participating in the 2023 Innovation Competition defense.",
    images: [
        "https://i.postimg.cc/W4v8dKQK/webue-20231128-34091701154445542.jpg"
    ]
  },
  { 
    id: "g_2023_tb", 
    title: "First Team Building", 
    coverUrl: "https://i.postimg.cc/rmSLSvm4/webue-20231209-49471702113617306.jpg", 
    date: "2023",
    description: "Our very first team building activity in 2023.",
    images: [
        "https://i.postimg.cc/rmSLSvm4/webue-20231209-49471702113617306.jpg"
    ]
  },
  { 
    id: "g_2023_animal", 
    title: "Large Animal Experiment", 
    coverUrl: "https://i.postimg.cc/HL6FfQJW/19501771045840-pic-hd.jpg", 
    date: "2023",
    description: "Conducting the first large animal experiment of 2023.",
    images: [
        "https://i.postimg.cc/HL6FfQJW/19501771045840-pic-hd.jpg"
    ]
  },
  { 
    id: "g_2023_shandong", 
    title: "Shandong Drone Testing", 
    coverUrl: "https://i.postimg.cc/C16J47RW/image.png", 
    date: "2023",
    description: "Memorable moments from the trip to Shandong for impact-resistant drone testing.",
    images: [
        "https://i.postimg.cc/C16J47RW/image.png"
    ]
  },
  { 
    id: "g_skate_1", 
    title: "Skateboarding Life", 
    coverUrl: "https://i.postimg.cc/ZKgtqPj8/19451771045350-pic.jpg", 
    date: "2023",
    description: "Daily skateboarding records.",
    images: [
        "https://i.postimg.cc/SNjR5rJs/Wechat-IMG1951.jpg",
        "https://i.postimg.cc/ZKgtqPj8/19451771045350-pic.jpg"
    ]
  },
  { 
    id: "g_skate_2", 
    title: "Skateboarding Moments", 
    coverUrl: "https://i.postimg.cc/NMbZvR5t/19461771045456-pic-hd.jpg", 
    date: "2023",
    description: "Enjoying the ride.",
    images: [
        "https://i.postimg.cc/NMbZvR5t/19461771045456-pic-hd.jpg"
    ]
  }
];