const AdminPanel = () => <p>Admin controls are available.</p>;
const UserPanel = () => <p>Welcome to your account.</p>;
const GuestPanel = () => <p>Please sign in to continue.</p>;

const Question4 = ({ role }) => {
  const panels = {
    admin: <AdminPanel />,
    user: <UserPanel />,
    guest: <GuestPanel />,
  };

  return (
    <section>
      <h2>4. Component Selected By Prop</h2>
      {panels[role] || <GuestPanel />}
    </section>
  );
};

export default Question4;
