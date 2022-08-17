<template>
  <section class="login-contain animate__animated animate__fadeInRight">
    <el-form
      :model="form"
      :rules="rules"
      ref="mkForm"
      label-width="70px"
      class="mk-form"
    >
      <div class="login-from">
        <div class="mk-form-row">
          <el-form-item label="用户名" prop="username">
            <el-input
              v-model="form.username"
              placeholder="请输入用户名"
              clearable
              size="mini"
              class="mk-one"
            />
          </el-form-item>
        </div>
        <div class="mk-form-row">
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="form.password"
              size="mini"
              class="mk-one"
              placeholder="请输入密码"
              clearable
            >
            </el-input>
          </el-form-item>
        </div>
        <div class="mk-form-row">
          <el-form-item label="密码" prop="password2">
            <el-input
              v-model="form.password2"
              size="mini"
              class="mk-one"
              placeholder="请再次输入密码"
              clearable
            >
            </el-input>
          </el-form-item>
        </div>
        <div class="mk-form-row">
          <el-form-item>
            <el-button type="primary" size="mini" @click="register('mkForm')"
              >注册</el-button
            >
            <el-button @click="reset('mkForm')" size="mini">重置</el-button>
          </el-form-item>
        </div>
      </div>
    </el-form>
  </section>
</template>
<script>
export default {
  data() {
    return {
      form: {},
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    register(formName) {
      let _this = this;
      this.$refs[formName].validate(function (valid) {
        if (valid) {
          _this.$http
            .post("/register", { ..._this.form })
            .then((res) => {
              _this.$router.push("/");
              // if (res && res.msg) {
              //   _this.$message.success(res.msg);
              // } else {
              //   _this.$router.push("/booklist");
              // }
            })
            .catch((err) => {
              console.log("err=>", err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    reset(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style>
.login-contain {
  width: 100%;
  height: 100%;
}
.login-contain .login-avatar {
  width: 75px;
  height: 75px;
  margin: 0 auto;
  margin-bottom: 35px;
  text-align: center;
}
.login-contain .login-avatar > img {
  border-radius: 15px;
  overflow: hidden;
}

.login-contain .login-from {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  margin-bottom: 35px;
  text-align: center;
}

.login-tip {
  font-size: 12px;
  color: #909399;
}

.login-tip .reg {
  padding-left: 5px;
  cursor: pointer;
  color: #409eff;
  font-weight: bold;
  font-size: 14px;
}

.mk-form {
  border-radius: 4px;
  width: 100%;
  height: auto;
  min-height: calc(100vh - 116px);
  overflow-y: auto;
}
.mk-form .form-btn-box {
  margin-top: 10px;
}

.mk-form .mk-form-row {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
}
.mk-form .mk-form-row .el-form-item {
  margin-bottom: 14px;
}
</style>
