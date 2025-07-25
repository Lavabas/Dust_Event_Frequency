# Dust Event Frequency Analysis (2016–2025) in Northern Sri Lanka using MODIS AOD

## Overview
This analysis investigates the spatial and temporal patterns of dust event occurrences over a dry zone region in Northern Sri Lanka (Mannar–Vavuniya corridor) using MODIS-derived Aerosol Optical Depth (AOD) data. By identifying the frequency of days with high atmospheric aerosol content (AOD > 0.5), this approach provides an estimate of dust event activity annually from 2016 to 2025.

<img width="1920" height="830" alt="Screenshot (275)" src="https://github.com/user-attachments/assets/1ffd0f19-5d7d-4d05-a94e-dbe91f8543ae" />

## Data & Timeframe
| Parameter   | Details                               |
| ----------- | ------------------------------------- |
| Satellite   | MODIS Terra                           |
| Dataset     | `MODIS/061/MCD19A2_GRANULES`          |
| Band Used   | `Optical_Depth_055`                   |
| Threshold   | AOD > 0.5 (indicative of dust events) |
| Time Period | 2016 – 2025                           |
| Aggregation | Annual event frequency                |

### Dust Frequency Trend (2016–2025)
<img width="1496" height="664" alt="ee-chart (3)" src="https://github.com/user-attachments/assets/b0a47bc5-c633-438c-8adb-fc22b4fce339" />

- Peak activity: ~2018
- Notable drop: ~2020
- Recovery: Slight increase post-2021
- Recent years: Gradual decline, reaching the lowest by 2024

This may correspond with climatic variability, monsoon strength, or anthropogenic influences such as deforestation or land use change.

## Importance of the Analysis
Dust events are not only environmental phenomena but also public health hazards and indicators of land degradation. Monitoring dust trends is critical in regions like Northern Sri Lanka where:
- Dry climate and seasonal winds increase dust mobilization.
- Deforestation, agriculture, and land clearing disturb the soil.
- Air quality impacts are poorly measured by ground stations.

## Key reasons why this analysis is valuable:

🔹 Environmental Monitoring: Track changes in atmospheric dust levels over time.

🔹 Public Health: High dust levels are linked to respiratory and cardiovascular issues.

🔹 Land Degradation Indicator: Persistent dust emissions often suggest soil erosion and unsustainable land use.

🔹 Climate Change Sensitivity: Dust patterns respond to precipitation, temperature, and wind variability.

🔹 Policy Insight: Supports climate adaptation planning, especially in arid and semi-arid zones.

## Notes
1. Threshold Justification: AOD > 0.5 is widely accepted as a marker of moderate-to-heavy aerosol/dust loading in the atmosphere.
2. Cloud Contamination: MODIS AOD retrievals can be influenced by clouds. Ensure QA filtering if accuracy is critical.
3. Regional Relevance: While dust storms are more severe in arid regions like the Middle East or North India, localized dry zone events in Sri Lanka are often underreported and deserve more attention.
4. Temporal Gap: AOD measurements are only available on clear-sky days, which may introduce bias in monsoon seasons.



