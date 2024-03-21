const mongoose = require('mongoose');
const AcademicRecord = require('./academicRecordSchema');
const CoCurricularActivity = require('./coCurricularActivitySchema');

mongoose.connect('mongodb://localhost:27017/Prepinsta', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((e) => {
  console.log("Error: ", e);
});

async function main() {
    try {
      await AcademicRecord.create([
        {
          student_id: 'S001',
          name: 'John Doe',
          grades: { math: 'A', science: 'B', history: 'A-' },
          subjects: ['Math', 'Science', 'History'],
          other_info: 'Honors student',
        },
        {
          student_id: 'S002',
          name: 'Jane Smith',
          grades: { math: 'B', science: 'A', history: 'B+' },
          subjects: ['Math', 'Biology', 'English'],
          other_info: 'Average student',
        },
      ]);

      await CoCurricularActivity.create([
        {
          student_id: 'S001',
          name: 'John Doe',
          activity_type: 'Sports',
          duration: '2 years',
          achievements: ['Winner of inter-school football tournament'],
        },
        {
          student_id: 'S002',
          name: 'Jane Smith',
          activity_type: 'Music',
          duration: '3 years',
          achievements: ['Performed in school orchestra'],
        },
      ]);
      console.log('Sample data inserted successfully!');
  
    await AcademicRecord.updateOne(
      { student_id: 'S001' },
      { $set: { 'grades.math': 'A+' } }
    );
    console.log('Sample data updated successfully!');

    await CoCurricularActivity.deleteOne({ student_id: 'S002', activity_type: 'Music' });

    console.log('Sample data deleted successfully!');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    mongoose.disconnect();
  }
}

main();
