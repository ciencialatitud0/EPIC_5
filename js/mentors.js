document.addEventListener('DOMContentLoaded', function() {
  // Mentor data
  const mentorData = {
    mentor1: {
      name: "Andrés Morales-Navarrete, Ph.D.",
      title: "Computational Biophysics & Machine Learning for Biology",
      bio: "Hernán Andrés Morales-Navarrete holds a PhD in computational Biology from the Max Planck Institute of Molecular Cell Biology and Genetics in Dresden, Germany, with a specialization in bioimage analysis, machine learning, and computational embryology. Currently, he is a Research Professor at Universidad de Las Américas in Quito, Ecuador. Hernán Andrés has extensive experience in computational research and programming education. He has received multiple international recognitions, including awards from Nature Methods (part of the Method of the year 2023). As a mentor for the programming school's hackathon, Hernán enthusiastically supports students in developing innovative solutions through computational thinking and advanced AI programming techniques.",
      achievements: [
        "Nature Methods - Work featured in Method of the Year (2023)",
        "Physics Without Frontiers Grant Awardee (2023, 2024)",
        "EPIC School of Programming for Scientific Research Coordinators",
        "Summa cum laude PhD thesis award, MPI-CBG Dresden"
      ],
      courses: [
        "Bioimage Analysis",
        "Computational Embryology",
        "Machine Learning for Biological Data",
        "Data Science and Machine Learning"
      ]
    },
    mentor2: {
      name: "Paulina Vizcaino, PhD",
      title: "Specializes in computing science and education.",
      bio: "Dr. María Gutiérrez specializes in the intersection of data science and image analysis, with applications ranging from medical imaging to remote sensing. She earned her doctorate from the Technical University of Madrid before joining the research faculty at Universidad de las Américas. Her work focuses on developing algorithms that can extract meaningful information from complex image datasets, with particular interest in neural network architectures for image segmentation and classification.",
      achievements: [
        "Developer of ImageAnalyticsPro, an open-source toolkit for scientific image processing",
        "Co-founder of the Latin American Network for Computational Imaging",
        "Recipient of the 2023 Innovation Award from the Ministry of Science and Technology",
        "Author of 'Modern Approaches to Scientific Image Analysis', a widely-used textbook"
      ],
      courses: [
        "Computer Vision Fundamentals",
        "Neural Networks for Image Processing",
        "Scientific Visualization Techniques"
      ]
    },
    mentor3: {
      name: "Helga Dénes, Ph.D.",
      title: "Radio Astronomy & Astrophysics",
      bio: "Helga Dénes has a Masters degree in Astronomy from the Eötwös Lórand University in Budapest, Hungary. She obtain her PhD in Astrophysics in 2015 from Swinburne University of Technology in Melbourne, Australia. After her PhD she was a postdoctoral researcher jointly at CSIRO Astronomy and Space Science in Sydney and at The Australian National University in Canberra, Australia. After finishing her position in Sydney she was a postdoctoral researcher at ASTRON, The Netherlands Institute for Radio Astronomy. At the moment she is a Professor at Yachay Tech University in the School of Physical Sciences and Nanotechnology. Helga’s main scientific interest is how the gas content of galaxies influences their evolution. She works on both extragalactic and Galactic astrophysics topics and is a member of several large radio astronomy survey teams, such as the Apertif Imaging Surveys, the WALLABY Survey and the GASKAP Survey. She is a member of the International Astronomical Union (IAU) and the Astronomical Society of Australia (ASA).",
      achievements: [
        "New H I scaling relations to probe the H I content of galaxies via global H I-deficiency maps.",
        "Cold gas outflows from the Small Magellanic Cloud traced with ASKAP.",
        "H I-deficient galaxies in intermediate-density environments.",
        "Calibrating the HISA temperature: Measuring the temperature of the Riegel-Crutcher cloud."
      ],
      courses: [
        "Galaxy evolution",
        "Gas content of galaxies",
        "Interstellar medium",
        "Radio astronomy surveys"
      ]
    },
    mentor4: {
      name: "Iván Reyes Chacón, MgTI, MCs,",
      title: "Cybersecurity and Business Technology and Systems Management",
      bio: "Iván Reyes Chacón, MgTI, MCs, is a prominent leader in the academic and technological fields, with over a decade of experience in university-level management and teaching. Currently, he serves as the Academic Coordinator of Graduate Programs at the School of Computer Science at UIDE (Universidad Internacional del Ecuador), where he leads the training of professionals in emerging technologies. Iván holds two master’s degrees in Cybersecurity and Business Technology and Systems Management As a consultant in Digital Transformation and Applied Artificial Intelligence for Business, he has led strategic projects to optimize enterprise systems. His strong technical background includes expertise in software development using Python, Java, Go, and C#, as well as forensic system analysis. His research work in Artificial Intelligence and Data Science underscores his commitment to technological innovation. With an integrated vision that bridges academia, industry, and technology, Iván Reyes is a key figure in driving digital evolution and cybersecurity within both business and educational environments. ",
      courses: [
        "Cybersecurity and Digital Risk Management",
        "Artificial Intelligence for Business Transformation",
        "Forensic Analysis of Information Systems",
        "Software Development with Python, Java and  Go "
      ]
    },
    mentor5: {
      name: "Lupe Villegas",
      title: "Cellular Image  & Biomedical Image Analysis ",
      bio: "I am a physicist with a deep passion for the medical sciences, driven by a longstanding fascination with the complexity of biological systems. This curiosity led me to pursue a Master’s in Bioengineering and Biophysics, followed by a PhD in Biomedical Engineering. Currently, I am a researcher in the imAIgene group (Machine Learning for Biomedical Imaging Analysis and Multi-Omics Integration) at the Instituto de Investigaciones Biomédicas Sols-Morreale (UAM-CSIC) in Madrid. My work bridges biophysics, bioengineering, and biomedicine, now with a strong focus on applying machine learning to cell image analysis.",
      achievements: [
        "Developer of image analysis tools for biomedical research",
        "Awarded the Spanish FPI Scholarship for predoctoral research funding",
        "Selected for the Momentum-CSIC Program (Develop your digital talent), funded by the European Commission – NextGenerationEU "
      ],
      courses: [
        "Bioimage Analysis",
        "Data Science for Biological Data."
      ]
    },
    mentor6: {
      name: "Wladimir Banda, Ph.D.",
      title: "Computational Astrophysics",
      bio: "I am a computational astrophysicist working at the boundary between astrophysical gas dynamics and magnetohydrodynamics. I am originally from Quito, Ecuador. I did my undergraduate studies at the Physics Department of Escuela Politécnica Nacional in Quito, and completed my PhD at the Research School of Astronomy and Astrophysics of the Australian National University in Canberra. I have worked as a physics lecturer and astrophysics researcher at several institutes, including Ecuador’s Meteorology Office (INAMHI), Observatorio Astronómico de Quito, Universidad Técnica de Ambato, Hamburg Observatory of Hamburg University, and more recently I joined Universidad Yachay Tech in Urcuquí. The main tools for my research are supercomputers. I use them to numerically simulate astrophysical gases in both the interstellar and circumgalactic media. I study how such flows evolve under different initial environmental conditions and relate the results to telescope observations of e.g. dense gas clouds embedded in hot winds, high-velocity clouds in galactic outflows, and turbulent clouds in the Galactic centre.",
      achievements: [
        "Shock-multicloud interactions in galactic outflows – II. Radiative fractal clouds and cold gas thermodynamics",
        "Structure and kinematics of shocked gas in Sgr B2: further evidence of a cloud-cloud collision from SiO emission maps",
        "Shock-multicloud interactions in galactic outflows – I. Cloud layers with lognormal density distributions",
        "Filament formation in wind-cloud interactions. II. Clouds with turbulent density, velocity, and magnetic fields"
      ],
      courses: [
        "Magnetohydrodynamics",
        "Astrophysical gas dynamics",
        "Computational fluid mechanics",
        "Galactic winds and the Galactic centre"
      ]
    },
    mentor7: {
      name: "Esteban Ortiz, Msc",
      title: "Bioingeneer",
      bio:"Esteban is a mechanical engineer who holds a Master's degree in Bioengineering. He completed his undergraduate studies at the National Polytechnic School (Ecuador) and earned his Master's degree from Rice University. His experience encompasses the Biomechanics and Mechanobiology of hard and soft tissues, with an emphasis on cardiovascular, respiratory, intestinal, and musculoskeletal modeling. He has applied this knowledge to research aimed at understanding the mechanics of human organs, tissues, and cells, as well as to the development of medical devices and tissue engineering. He has worked in both the United States and Ecuador."
    },
  };

  // Mentor modal functionality
  const mentorButtons = document.querySelectorAll('.mentor-more');
  const mentorModal = document.getElementById('mentorModal');
  const modalTitle = document.querySelector('#mentorModal .modal-title');
  const modalBody = document.querySelector('#mentorModal .modal-body');
  
  mentorButtons.forEach(button => {
    button.addEventListener('click', function() {
      const mentorId = this.getAttribute('data-mentor');
      const mentor = mentorData[mentorId];
      
      modalTitle.textContent = mentor.name;
      
      let achievementsHTML = '';
      mentor.achievements.forEach(achievement => {
        achievementsHTML += `<li>${achievement}</li>`;
      });
      
      let coursesHTML = '';
      mentor.courses.forEach(course => {
        coursesHTML += `<li>${course}</li>`;
      });
      
      modalBody.innerHTML = `
        <div class="row">
          <div class="col-md-4">
            <img src="/api/placeholder/300/300" alt="${mentor.name}" class="img-fluid">
          </div>
          <div class="col-md-8">
            <h4>${mentor.title}</h4>
            <p>${mentor.bio}</p>
            
            <h5>Key Achievements</h5>
            <ul>${achievementsHTML}</ul>
            
            <h5>Courses & Workshops</h5>
            <ul>${coursesHTML}</ul>
          </div>
        </div>
      `;
      
      // Show modal (using Bootstrap's modal method)
      $('#mentorModal').modal('show');
    });
  });
});
