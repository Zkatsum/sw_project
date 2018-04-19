package com.qianfeng.sw.test;

import com.qianfeng.sw.preceding.dao.IGenreDAO;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by asus on 2018/4/12.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring-core.xml")
public class SwGenreTest {

    @Autowired
    private IGenreDAO igenreDAO;

    @Test
    public void testCase1(){
        igenreDAO.testgenre(1);
    }

    @Test
    public void testCasa(){
        HashMap<String, Object> hashMap = new HashMap<>();
        hashMap.put("sw_product_name","[五一][端午]上海/成都直飞美国塞班岛5-6天自由行（早订优惠+赠送午餐+军舰岛+环岛游+中文接送机+已含1550税费）");
        hashMap.put("sw_product_id",1);
        igenreDAO.testUpdate(hashMap);
    }

}
