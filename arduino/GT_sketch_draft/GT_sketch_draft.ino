
#include <ArduinoJson.h>
#include <SoftwareSerial.h>

// Define SoftwareSerial pins: RX (Pin 2), TX (Pin 3)
// This means Arduino D2 connects to HM-10 TX, Arduino D3 connects to HM-10 RX
SoftwareSerial BTSerial(2, 3);

// the pin connecting the light sensor hardware to the arduino
const int sensorPin = A0;
// the time since the arduino started
unsigned long previousMillis = 0;
// 15 minutes
const unsigned long interval = 900000UL;

void setup()
{
  // put your setup code here, to run once:
  Serial.begin(9600);
  BTSerial.begin(9600);
}

void loop()
{
  // the current time
  unsigned long currentMillis = millis();

  // if it has been 15 minutes or more...
  if (currentMillis - previousMillis >= interval)
  {
    // the previous time = the current time
    previousMillis = currentMillis;
    // create Json structured doc
    JsonDocument doc;
    // read from light sensor associated with A0
    int light_data = analogRead(sensorPin);

    // add light data to the json doc
    doc["light_data"] = light_data;

    // send data over BT
    serializeJson(doc, BTSerial);
    BTSerial.println();

    delay(2000);
  }
}
