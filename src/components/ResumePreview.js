import { Document, Page, Text, Image, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { margin: 10, padding: 10, fontSize: 12 },
  header: { fontSize: 18, marginBottom: 10 },
  image: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
});

const ResumePreview = ({ formData }) => (
  <Document>
    <Page style={styles.page}>
      <View>
        {formData.photo && <Image src={URL.createObjectURL(formData.photo)} style={styles.image} />}
        <Text style={styles.header}>{formData.name}</Text>
        <Text>{formData.email}</Text>
        <Text>{formData.phone}</Text>
        <Text>{formData.address}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Education</Text>
        <Text>{formData.education}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Experience</Text>
        <Text>{formData.experience}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Skills</Text>
        <Text>{formData.skills}</Text>
      </View>
    </Page>
  </Document>
);

export default ResumePreview;
