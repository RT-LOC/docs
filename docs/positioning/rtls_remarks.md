# Remarks on RTLS

In this section we describe some important considerations / topics when it comes to UWB meshing.

## Accuracy

UWB is unparalleled when it comes to accuracy of the distance measurements. The technology inherently can achieve an accuracy on the distance measurement of less than 10 centimeters. The resulting calculated positions can have an accuracy of down to 10cm.

An important consideration is the 'body effect'. Any RF signal travels slower through water and gets attenuated significantly. This means an introduction of error on the measurements. As your body basically is a mass of water, distances that are measured through a body will be higher than expected. The best accuracy is reached with **Line-of-Sight (LOS) conditions**, when no objects are in between 2 tags. As people are most at risk when they are face to face, this implies that tags are best worn on the front side.

## Power consumption

UWB is a power-hungry technology. To achieve long battery life, it is key to have the UWB radio switched on as little as possible. In our RTLS system (contrary to the distancing system) we can make sure the devices sleep when they do not have to send or detect.

Our RTLS implementation by default focuses on high speed (highly frequent) and high accuracy (using TWR) detection. In this case the UWB radio will be on often and there will be high battery consumption.

## 3D positioning

If you need also the Z position, you will need to make sure you have anchors placed at different heights. You will also need more anchors than you normally would need in a 2D RTLS scenario.