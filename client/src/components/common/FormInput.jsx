const FormInput = ({ label, name, value, onChange, type = "text" }) => (
  <div>
    <label className="block mb-1 text-sm">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full p-3 rounded-lg border border-skin-accent2 bg-transparent outline-none focus:ring-2 focus:ring-skin-accent transition"
    />
  </div>
);

export default FormInput;
