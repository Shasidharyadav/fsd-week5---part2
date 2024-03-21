const mongoose = require('mongoose');

const academicRecordSchema = new mongoose.Schema({
  student_id: { type: String, required: true },
  name: { type: String, required: true },
  grades: {
    math: String,
    science: String,
    history: String,
  },
  subjects: [String],
  other_info: String,
});

const AcademicRecord = mongoose.model('AcademicRecord', academicRecordSchema);

module.exports = AcademicRecord;
