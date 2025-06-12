const FormTextarea = ({ label, name, value, onChange, rows = 5 }) => (
  <div>
    <label className="block mb-1 text-sm">{label}</label>
    <textarea
      name={name}
      rows={rows}
      value={value}
      onChange={onChange}
      required
      className="w-full p-3 rounded-lg border border-skin-accent2 bg-transparent outline-none focus:ring-2 focus:ring-skin-accent transition"
    />
  </div>
);

export default FormTextarea;
