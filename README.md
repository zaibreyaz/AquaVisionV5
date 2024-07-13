# AquaVision

## Introduction
AquaVision is a multilingual web application designed to calculate and monitor the water footprint of various items. The platform leverages AI and Machine Learning to recommend lower footprint alternatives, guiding users towards more environmentally friendly choices.

##Key Features
1. User Interaction: Users can search for items by text or scan them, which are identified through a computer vision model.
2. Recommendation System: AI and ML recommend products of similar purpose/category with lower water footprints from the database.
3. Multilingual Support: Supports over 15 regional languages using Google Translate for accessibility across India.
4. Data Analytics: Community dashboard displays average water footprint per person in an area.

## Technology Stack
- TensorFlow: For object detection and item identification.
- Google Translate API: For multilingual support.
- Data Analytics Tools: For real-time impact analysis and educational content.
- HTML, CSS and JavaScript for FrontEnd.
- Python and Flask for BackEnd.

## Use Cases
- Real-time water footprint tracking and locality-level data monitoring.
- Water scarcity alerts and water-saving tips based on locality's water footprint levels.
- Partnerships with small businesses to promote and incentivize low-water-footprint products.
- In-app marketplace for eco-friendly and water-efficient products.
- Integration with IoT devices in smart homes for household water usage monitoring.

## Installation
1. *Clone the repository*
    ```python
    git clone https://github.com/zaibreyaz/MicroSense.git
    ```
2. Make sure you have python 3.11 and pip installed in your machine.
3. Download TensorFlow model from google drive:
    ```bash
    python download_model.py
    ```
3. Install the required dependencies using pip:
    ```bash
    pip install -r requirements.txt
    ```
4. Run the flask application:
    ```bash
    pyhton app.py
    ```
5. Open this url in browser: `http://127.0.0.1:5000/`


##Dependencies
- TensorFlow Model: Performance and accuracy in item identification.
- Database Accuracy: Regular updates with accurate water footprint data.
- User Engagement: Active user participation for success and revenue generation.
- Localization: Accurate translation for effective regional use.
Partnerships: Collaboration with businesses for revenue generation.
- Cloud Service Dependency: Reliability of cloud services for object detection and user experience.

## Future work
1. Community Engagement: Includes a community dashboard and an AI chatbot to engage users, promote environmental awareness, and foster collective responsibility towards water conservation.
2. User Rewards: Incentives for buying suggested alternatives from the e-commerce portal in the form of cryptocurrency, discounts, or coupons.
3. Revenue Generation: Profit from the sale of lower water-footprint products and promotion of partnered local businesses through the e-commerce portal.
4. Query Inputs: Tracks water footprint of users through inputs such as total shower intake in a day and food wastage ratings.

## Contributing
We welcome contributions! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on how to contribute to this project.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
If you have any questions or need further assistance, please contact our support team at zaibreyazmd@gmail.com.
