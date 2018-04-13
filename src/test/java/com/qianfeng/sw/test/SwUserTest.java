package com.qianfeng.sw.test;

import com.qianfeng.sw.preceding.dto.SwUserDTO;
import com.qianfeng.sw.preceding.service.ISwUserService;
import org.apache.log4j.Logger;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**Author:wanggaiwei
 * Created by admin on 2018/4/10.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring-core.xml")
public class SwUserTest {
    private static final Logger logger=Logger.getLogger(SwUserTest.class);

    @Autowired
    private ISwUserService swUserService;

    /**
     * 单元测试登录方法
     */
    @Test
    public void getuserLogin(){
        SwUserDTO userLogin = swUserService.getUserLogin("15271934940");
        if(logger.isInfoEnabled()){
            logger.info(userLogin.getUserName());
        }

    }

    /**
     * md5加密方法
     */
    @Test
    public void getSimpleMd5(){
        SwUserDTO userLogin = swUserService.getUserLogin("15271934940");
        SimpleHash hash = new SimpleHash("MD5","123123", "无");
        if(logger.isInfoEnabled()){
            logger.info(hash.toString());
        }
    }
    /**
     * 判断字符串是否是数字
     */
    @Test
    public void getStringisNumber(){
        String str="123";
        char[] chars = str.toCharArray();

            if(Character.isDigit(chars[str.length()-1])){
                System.out.println("是数字");
            }else{
                System.out.println("不是");
            }
         }
    /**
     * 邮箱登录测试
     */
      @Test
      public void getEamilLogin(){
          SwUserDTO userEmailLogin = swUserService.getUserEmailLogin("1240029870@qq.com");
          if(logger.isInfoEnabled()){
              logger.info(userEmailLogin.getUserPassword());
          }
      }
    /**
     * 用户名登录测试
     */
    @Test
    public void getUserNameLogin(){
        SwUserDTO jaychou = swUserService.getUserNameLogin("jaychou");
        if(logger.isInfoEnabled()){
            logger.info(jaychou.getUserPassword());
        }
    }

}
