/*
 * @Author: vinzhao vinzhao@deloitte.com.cn
 * @Date: 2023-08-08 11:08:37
 * @LastEditors: vinzhao vinzhao@deloitte.com.cn
 * @LastEditTime: 2023-08-08 16:41:38
 * @FilePath: \react-demo\.eslintrc.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    ules: { 
      semi: "off", 
      "@typescript-eslint/semi": ["error", "never"],
       "react/react-in-jsx-scope": "off"
  },
  // 需要手动添加下面内容，否则会有一个不太重要的警告信息
  settings: {
     "react": { "version": "detect" } 
  },
}
