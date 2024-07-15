const Protected = ({token}: {token :string | undefined}) => {
  return (
    <div>
      <h1>Protected page, token: ${token}</h1>
    </div>
  );
};

export default Protected;