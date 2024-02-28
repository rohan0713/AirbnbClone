import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { colors } from "../assets/colors/color";

function DescriptionScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Image
            style={{
              width: "100%",
              height: 300,
            }}
            source={require("../assets/static/ic_prop.jpg")}
          />
        </View>

        <Text style={styles.title}>
          Lotus Studio in Skandavan's garden, Edayanchavadi
        </Text>

        <Text style={styles.location}>Earthen home in Auroville, India </Text>
        <Text
          style={{
            marginHorizontal: 20,
            fontWeight: 300,
          }}
        >
          2 guests | 1 bedroom
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 20,
            marginTop: 10,
            gap: 10,
          }}
        >
          <Image source={require("../assets/static/ic_star.png")} />
          <Text
            style={{
              fontWeight: 500,
            }}
          >
            4.82
          </Text>

          <Text
            style={{
              fontWeight: 500,
              textDecorationLine: "underline",
            }}
          >
            222 reviews
          </Text>
        </View>
        <View style={styles.divider}></View>
        <View
          style={{
            marginHorizontal: 20,
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: 30,
            }}
            source={require("../assets/static/ic_prop.jpg")}
          />
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Hosted by Manoj
            </Text>

            <Text
              style={{
                fontSize: 13,
                fontWeight: 300,
              }}
            >
              8 years hosting
            </Text>
          </View>
        </View>

        <View style={styles.divider}></View>

        <View
          style={{
            marginHorizontal: 20,
            flexDirection: "row",
            marginBottom: 20,
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 30,
                height: 30,
              }}
              source={require("../assets/static/ic_location.png")}
            />
          </View>
          <View
            style={{
              marginHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Great location
            </Text>

            <Text
              style={{
                fontSize: 13,
                fontWeight: 300,
                width: "90%",
              }}
            >
              90% of recent guests gave the location a 5-star rating.
            </Text>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: 20,
            flexDirection: "row",
            marginBottom: 20,
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 30,
                height: 30,
              }}
              source={require("../assets/static/ic_keys.png")}
            />
          </View>
          <View
            style={{
              marginHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Great check-in experience
            </Text>

            <Text
              style={{
                fontSize: 13,
                fontWeight: 300,
                width: "80%",
              }}
            >
              90% of recent guests gave the check-in process a 5-star rating.
            </Text>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: 20,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 30,
                height: 30,
              }}
              source={require("../assets/static/ic_parking.png")}
            />
          </View>

          <View
            style={{
              marginHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Park for free
            </Text>

            <Text
              style={{
                fontSize: 13,
                fontWeight: 300,
              }}
            >
              This is one of the few places in the area with free parking.
            </Text>
          </View>
        </View>

        <View style={styles.divider}></View>

        <Text
          style={{
            marginHorizontal: 20,
            fontWeight: 300,
            fontSize: 16,
          }}
        >
          This is a large self-standing, studio-bedroom with a dome shaped roof
          and excellent natural ventilation on all four sides. Set in a
          beautiful garden with a large fish pond, it provides a tranquil,
          rejuvenating getaway from busy city life. A private place to spend
          quality time with family and friends.
        </Text>

        <View style={styles.divider}></View>

        <Text
          style={{
            marginHorizontal: 20,
            fontSize: 20,
            fontWeight: "500",
          }}
        >
          Where you'll sleep
        </Text>
      </ScrollView>

      <View style={styles.footer}></View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
            }}
          >
            ₹2,750 night
          </Text>

          <Text
            style={{
              fontSize: 13,
              fontWeight: "400",
              textDecorationLine: "underline",
            }}
          >
            Mar 4-9
          </Text>
        </View>

        <TouchableOpacity
          style={{
            width: 100,
            height: 50,
            marginHorizontal: 20,
            marginVertical: 10,
            backgroundColor: colors.primary,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
          activeOpacity={0.8}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            Reserve
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  title: {
    fontSize: 24,
    margin: 20,
    fontWeight: "bold",
  },

  location: {
    marginHorizontal: 20,
    fontSize: 16,
    fontWeight: "500",
  },

  divider: {
    marginVertical: 30,
    marginHorizontal: 20,
    height: 0.8,
    backgroundColor: "lightgrey",
  },

  footer: {
    height: 0.3,
    backgroundColor: "lightgrey",
  },

  profileIcon: {
    borderRadius: 20,
  },
});

export default DescriptionScreen;
