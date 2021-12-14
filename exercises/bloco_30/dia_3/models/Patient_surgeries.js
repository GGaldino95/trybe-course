module.exports = (sequelize, DataTypes) => {
  const PatientSurgeries = sequelize.define(
    'Patient_surgeries',
    {},
    { timestamps: false },
  );

  Patient_surgeries.associate = (models) => {
    models.Surgeries.belongsToMany(models.Patients, {
      as: 'patients',
      through: Patient_surgeries,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
    });
    models.Patients.belongsToMany(models.Surgeries, {
      as: 'surgeries',
      through: Patient_surgeries,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
    });
  };

  return PatientSurgeries;
};
