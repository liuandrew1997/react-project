import { Modal, Form, Input, Button, message } from "antd";

export function Register() {
  // 账号
  const [account, setAccount] = useState("");
  // 密码
  const [password, setPassword] = useState("");
  // 确认密码
  const [rePassword, setRePassword] = useState("");
  // 全局公共个人状态
  const { register, users } = useUser();
  // 全局公共注册弹窗状态
  const { regVisible, switchRegVisible, switchLoginVisible } = useModal();

  // 注册提交按钮
  function handleFinish() {
    // 密码验证;
    if (password !== rePassword) {
      message.warning("两次密码不一致");
      return;
    } else {
      // 账号验证
      if (users.some((user) => user.account === account)) {
        message.warning("该账号已存在");
      } else {
        // 注册
        register(account, password);
        // 关闭注册弹窗
        switchRegVisible();
        message.success("注册成功");
      }
    }
  }

  return (
    <Modal
      width="400px"
      open={regVisible}
      footer={null}
      className="relative"
      onCancel={switchRegVisible}
    >
      <h1 className="text-center c-#404040 text-22px font-normal my-8">
        账号注册
      </h1>
      <div className="pb-44px flex items-center justify-center w-full">
        <Form
          name="register"
          style={{ width: "300px" }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={handleFinish}
        >
          {/* 账号 */}
          <Form.Item name="account">
            <Input
              placeholder="请输入账号"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
            />
          </Form.Item>
          {/* 密码 */}
          <Form.Item name="password">
            <Input.Password
              placeholder="请输入密码"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          {/* 确认密码 */}
          <Form.Item name="re-password">
            <Input.Password
              placeholder="请再次输入密码"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
            />
          </Form.Item>
          {/* 注册 */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="flex w-full items-center justify-center bg-#444b52 text-white rounded-full"
            >
              <span>立即注册</span>
            </Button>
          </Form.Item>
        </Form>
      </div>
      {/* 跳转登录 */}
      <div className="absolute w-full h-44px bottom-0 left-0 bg-[rgba(77,85,93,0.1)] flex items-center justify-center">
        <span>已有账号?</span>
        <span
          className="text-blue-400 cursor-pointer"
          onClick={() => {
            switchRegVisible();
            switchLoginVisible();
          }}
        >
          立即登录
        </span>
      </div>
    </Modal>
  );
}
