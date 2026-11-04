
#include <ArduinoJson.h>

const int sensorPin = A0;

void setup()
{
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop()
{
  // read from light sensor associated with A0
  int light_data = analogRead(sensorPin);

  // print data to monitor
  Serial.print("Light data: ");
  Serial.print(light_data);
  Serial.println();

  delay(2000);
}
