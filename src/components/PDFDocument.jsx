'use client';

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from '@react-pdf/renderer';

Font.register({
  family: 'NotoSansEthiopic',
  src: 'NotoSansEthiopic-VariableFont_wdth,wght.ttf',
});

const styles = StyleSheet.create({
  page: {
    fontFamily: 'NotoSansEthiopic',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    position: 'relative',
  },
  idCard: {
    width: '33.33%',
    height: '33.33%',
    padding: 10,
    boxSizing: 'border-box',
  },
  cardContainer: {
    border: '1pt solid #000',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    backgroundColor: '#A0F7FF',
    textAlign: 'center',
    color: '#FF4D4D',
    fontSize: 15,
    padding: 2,
    marginBottom: 5,
  },
  bottom: {
    flexDirection: 'row',
    flex: 1,
  },
  leftColumn: {
    padding: 5,
    flex: 1,
    justifyContent: 'space-evenly',
  },
  rightColumn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 5,
  },
  label: {
    fontSize: 12,
    marginBottom: 2,
  },
  image: {
    width: 85,
    height: 85,
  },
  seal: {
    position: 'absolute',
    top: '35%',
    left: '25%',
    width: 300,
    height: 300,
    opacity: 0.1,
    zIndex: 10,
  },
});

export function RegistrationIDDocument({ students }) {
  return (
    <Document>
      <Page size='A4' orientation='landscape' style={styles.page}>
        {/* <Image src={sealImage} style={styles.seal} /> */}

        {students.map((student, index) => (
          <View key={index} style={styles.idCard}>
            <View style={styles.cardContainer}>
              <Text style={styles.title}>
                የመካነ ሰማዕት ቅዱስ ቂርቆስ ቤተ ክርስቲያን የፈለገ አእምሮ አብነት ትምህርት ቤት የደቀ መዛሙርት
                መታወቂያ
              </Text>
              <View style={styles.bottom}>
                <View style={styles.leftColumn}>
                  <Text style={styles.label}>ሙሉ ስም: {student.fullName}</Text>
                  <Text style={styles.label}>ስልክ ቍጥር: 0{student.phoneNo}</Text>
                  <Text style={styles.label}>መለያ ቍጥር: {student.uniqueId}</Text>
                  <Text style={styles.label}>
                    ቤተ {student.classDetails.classroom}
                  </Text>
                  <Text style={styles.label}>
                    ትምህርት: {student.classDetails.subject}
                  </Text>
                </View>
                <View style={styles.rightColumn}>
                  <Image src={student.photoUrl} style={styles.image} />
                </View>
              </View>
            </View>
          </View>
        ))}
      </Page>
    </Document>
  );
}

// const studentImage = 'https://via.placeholder.com/80';
// const sealImage = 'https://via.placeholder.com/300x300?text=Seal';
