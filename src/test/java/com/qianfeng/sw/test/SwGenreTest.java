package com.qianfeng.sw.test;

import com.qianfeng.sw.preceding.dao.IGenreDAO;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

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

}
