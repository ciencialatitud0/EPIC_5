

# Segmentatiobn of bright field images of embrionic development

## Goal
The goal of this challenge is to develop a standalone python code for creating masks of zebrafish embryos from bright field images (as shown below). Participants are free to choose any image analysis algorithm, including deep learning approaches. 

![Workflow](https://github.com/ciencialatitud0/EPIC_5/blob/main/Tutorials/challenges/ArtificialIntelligence_and_BioimageAnalysis/mask_workflow.png)

## Challenge Steps
1. Data Download:
   * Download the image data from [Training Data](https://drive.google.com/drive/folders/1tLrE2akKF_bZ9pQby3_rtsgCmlzKe7f-?usp=sharing)
   * Use as many images as needed for algorithm development.
   * The images (time frames) are located in the subfolders '../images'
   * The masks  (time frames) are located in the subfolders '../masks'

2. Data Visualization:
   * Visualize example images in a Jupyter notebook to understand dataset characteristics.

3. Algorithm Development:
   * Develop an algorithm to generate masks. Use any algorithm, including machine learning.
   * Clearly document the algorithm steps in the code.
   * You can use denoising algorithms to improve teh segemnattion results if you consider it necessary.

5. Evaluation:
   * Evaluate the algorithm on images from [Evaluation Data](https://drive.google.com/drive/folders/1yEtBTO41igEbXU_DG2ACTM4JOCp2XTyx?usp=drive_link) 
   * Include comprehensive metrics in the evaluation, such as accuracy, precision, recall, etc. Feel free to include as many metrics as you consider necesary.
   * Your creativity in the evaluation workflow will be graded too.


## Submission Guidelines
* Submit the complete code used in algorithm development.
* Provide a Jupyter notebook showcasing the entire process, including raw image loading, masking, and result analysis. The Jupyter notebook will serve for external evaluation, please ensure proper comments throughout.
* Clearly mention any external tools or packages used. Make sure they are publicly available and free.
* Include the raw images and annotated mask (of the link to a repository or cloud wher they are stored) if you used a supervised learning approach.
  

## Evaluation
* Usability (20%): Your code should run smoothly, and its readability should be accessible to external evaluators.
* Interpretability (20%): Evaluation results should be quantitative and rigorous, providing a clear understanding of algorithm performance.
* Generalizability (40%): The code should work effectively on other similar, unseen images. The evaluators will test your code in a different set of images.
* Performance (20%): Evaluation of the code's speed and efficiency.

## Note
This challenge provides an opportunity to showcase your skills in bioimage analysis, artificial intelligence, and algorithm development. Thorough documentation and detailed analysis of results are encouraged. Good luck!


Data from:
* Čapek, D., Safroshkin, M., Morales-Navarrete, H. et al. EmbryoNet: using deep learning to link embryonic phenotypes to signaling pathways. Nat Methods 20, 815–823 (2023).[Avaible here](https://doi.org/10.1038/s41592-023-01873-4)
* Toulany, N., Morales-Navarrete, H. et al. Uncovering developmental time and tempo using deep learning. Nat Methods (2023). [Avaible here](https://doi.org/10.1038/s41592-023-02083-8)
