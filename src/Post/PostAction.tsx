interface PostActionProps {
  icon: React.ElementType;
  label: string
}
export function PostAction({ icon: Icon, label } : PostActionProps) {
  return (
    <span>
      <Icon />
      <label>{label}</label>
    </span>
  );
}
