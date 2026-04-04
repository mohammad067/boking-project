function Input(props) {
  return (
    <div className="flex flex-col gap-2">
      {props.label && (
        <label className="text-white/60 text-xs tracking-wide">
          {props.label}
        </label>
      )}

      <input
        name={props.name}
        type={props.type ?? "text"}
        placeholder={props.placeholder}
        onChange={props.handleChange}
        value={props.value ?? ""}
        className={`w-full bg-transparent 
          text-white placeholder:text-white/40
          outline-none border border-white/10
          rounded-xl px-4 py-2
          focus:border-white/40 transition
          ${props.className ?? ""}`}
      />
    </div>
  );
}

export default Input;