function MemberWrapper({ name, role, image }) {
    return (
      <div className="flex flex-col items-center gap-2">
        <div className="h-32 w-32 overflow-hidden rounded-full">
          <img
            className="box-border h-32 w-32 object-cover self-center"
            src={image}
            alt={`${name}'s profile picture`}
          />
        </div>
        <h2 className="text-center font-bold text-2xl dark:text-gray-100">{name}</h2>
        <p className="text-center font-medium dark:text-gray-100">{role}</p>
      </div>
    );
  }
  
  export default MemberWrapper;
  