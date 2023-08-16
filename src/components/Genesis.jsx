import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import GenesisImg from '../assets/png/Genesis.webp'
import Para_1 from '../assets/png/MANY YEARS.webp'
import img_2004 from '../assets/png/img_2004.webp'
import img_2006 from '../assets/png/img_2006.png'
import designed_to_decorate from '../assets/png/designed to decorate.webp'
import pop_art_idea from '../assets/png/pop_art_idea.webp'
import girl_img_1 from '../assets/png/girl_img_1.webp'
import girl_img_2 from '../assets/png/girl_img_2.webp'
import Mcmanus from '../assets/png/Mcmanus.webp'
import img_2007 from '../assets/png/img_2007.webp'
import three_people_img from '../assets/png/three_people_img.webp'
import Arts from '../assets/png/Arts.webp'
import girl_img_3 from '../assets/png/girl_img_3.webp'
import exhibitions from '../assets/png/exhibitions.webp'
import img_2011_14 from '../assets/png/img_2011-14.webp'
import girl_img_4 from '../assets/png/girl_img_4.webp'
import potts_point from '../assets/png/potts_point.webp'
import Leon_gallery from '../assets/png/Leon_gallery.webp'
import Logo from '../assets/png/L vs p.webp'
import Para_2 from '../assets/png/THIS ARTIST.webp'
import img_2005 from '../assets/png/img_2005.webp'
import girl_img_5 from '../assets/png/girl_img_5.webp'
import girl_img_6 from '../assets/png/girl_img_6.webp'
import couple_img from '../assets/png/couple_img.webp'
import soto_art from '../assets/png/soto_art.webp'
import Style_news from '../assets/png/Style_news.webp'
import img_2006_1 from '../assets/png/img_2006.webp'
import girl_img_7 from '../assets/png/girl_img_7.webp'
import digital_divide from '../assets/png/digital_divide.webp'
import Leon_krasenstein from '../assets/png/Leon_krasenstein.webp'
import couple_img_2 from '../assets/png/couple_img_2.webp'
import img_2008 from '../assets/png/img_2008.webp'
import img_2010 from '../assets/png/img_2010.webp'
import couple_img_3 from '../assets/png/couple_img_3.webp'
import girl_img_8 from '../assets/png/girl_img_8.webp'
import girl_img_9 from '../assets/png/girl_img_9.webp'
import drawing_a_crowd from '../assets/png/drawing_a_crowd.webp'
import MyNavBar from './MyNavBar'

const Genesis = () => {
    return (
        <div className='bg_gradient'>
            <MyNavBar/>
            <div className='overdflow-hidden py-5'>
              <Container>
              <Row className='py-md-5 mb_5 CenterLine'>
                    <Col lg={6} className='pe-0 pb-5'>
                        <div className='d-flex align-items-center justify-content-lg-end pt-3'>
                            <img src={GenesisImg} alt="" />
                        </div>
                        <img className='pt-4 ps-2 ms-sm-5 pb-3' src={Para_1} alt="" />
                        <div className='d_grid d-grid'>
                            <div className='designed_to_decorate ms-5 pt-5 pe-3'>
                                <img className='w-100 h-100' src={designed_to_decorate} alt="" />
                            </div>
                            <div className=' img_2004 pt-4 ps-sm-4'>
                                <img className='w-100' src={img_2004} alt="" />
                            </div>
                            <div className=' img_2006 pt-5 mt-3'>
                                <img className='w-100' src={img_2006} alt="" />
                            </div>
                            <div className=' pop_art_idea ps-4 pe-4 mt-4'>
                                <img className='w-100 h-100' src={pop_art_idea} alt="" />
                            </div>
                            <div className='girl_img_1 pt-5'>
                                <img className='w-100 h-100' src={girl_img_1} alt="" />
                            </div>
                            <div className='girl_img_2 mx-3 py-5'>
                                <img className='w-100' src={girl_img_2} alt="" />
                            </div>
                            <div className='Mcmanus mx-4 pe-sm-4 py-5'>
                                <img className='w-100' src={Mcmanus} alt="" />
                            </div>
                            <div className='img_2007'>
                                <img className='w-100' src={img_2007} alt="" />
                            </div>
                            <div className='three_people_img  ms-5 pe-3 py-5'>
                                <img className='w-100' src={three_people_img} alt="" />
                            </div>
                            <div className='Arts pe-sm-5 pb-5 pb-sm-0 mx-5'>
                                <img className='w-100' src={Arts} alt="" />
                            </div>
                            <div className='girl_img_3 pe-sm-5 pe-3'>
                                <img className='w-100 h-100' src={girl_img_3} alt="" />
                            </div>
                            <div className='exhibitions pt-sm-5 mt-5 pe-4 ps-sm-5 ms-sm-5'>
                                <img className='w-100 h-100' src={exhibitions} alt="" />
                            </div>
                            <div className='img_2011-14 pt-5 pb-sm-5 pe-5 pe-sm-0 ps-sm-5 ms-sm-5'>
                                <img className='w-100 h-100' src={img_2011_14} alt="" />
                            </div>
                            <div className='girl_img_4 py-4 ps-sm-5 pe-2 pe-sm-0'>
                                <img className='w-100 h-100' src={girl_img_4} alt="" />
                            </div>
                            <div className='potts_point py-5  mt_5 pe-4 ps-4'>
                                <img className='w-100' src={potts_point} alt="" />
                            </div>
                            <div className='Leon_gallery ps-sm-5 pe-2 pe-sm-0'>
                                <img className='w-100 h-100' src={Leon_gallery} alt="" />
                            </div>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <img className='pt-5 Logo' src={Logo} alt="Logo" />
                        <img className='ps-sm-5 mx-sm-5 pt-5' src={Para_2} alt="" />

                        <div className='d-grid d_grid'>
                            <div className='img_2005 mx-sm-3 pt-5'>
                                <img className='w-100' src={img_2005} alt="" />
                            </div>
                            <div className='girl_img_5 ms-sm-2 pt-5 pt-sm-0 pe-3 pe-sm-0'>
                                <img className='w-100 h-100' src={girl_img_5} alt="" />
                            </div>
                            <div className='girl_img_6 ms-sm-5 pe-3 pe-sm-5 pt-sm-2 pt-5'>
                                <img className='w-100' src={girl_img_6} alt="" />
                            </div>
                            <div className='couple_img ms-sm-4 pe-3 pt-5'>
                                <img className='w-100 h-100' src={couple_img} alt="" />
                            </div>
                            <div className='soto_art ms-sm-4 pe-3 ps-1 pt-5'>
                                <img className='w-100 h-100' src={soto_art} alt="" />
                            </div>
                            <div className='Style_news ms-sm-4 pt-5 pe-3'>
                                <img className='w-100 h-100' src={Style_news} alt="" />
                            </div>
                            <div className='img_2006_1 ms-sm-3 pe-5 pe-sm-0 pt-5'>
                                <img className='w-100' src={img_2006_1} alt="" />
                            </div>
                            <div className='girl_img_7 pt-sm-0 pt-5 mx-sm-5 pe-sm-5 pe-3'>
                                <img className='w-100' src={girl_img_7} alt="" />
                            </div>
                            <div className='digital_divide ps-sm-5 ms-sm-5 mt-4 pe-sm-2 pe-3'>
                                <img className='w-100 h-100' src={digital_divide} alt="" />
                            </div>
                            <div className='Leon_krasenstein pt-5 mx-sm-5 pe-3 pe-sm-0'>
                                <img className='w-100 h-100' src={Leon_krasenstein} alt="" />
                            </div>
                            <div className='couple_img_2 pe-3 pe-sm-0 pt-5 ms-sm-5 ps-sm-4'>
                                <img className='w-100 h-100' src={couple_img_2} alt="" />
                            </div>
                            <div className='img_2008 pt-5 mx-sm-3 pb-4 pe-5 pe-sm-0 pb-sm-0'>
                                <img className='w-100 h-100' src={img_2008} alt="" />
                            </div>
                            <div className='couple_img_3 pt-4 pb-4 pe-3 pe-sm-0 pb-sm-0'>
                                <img className='w-100 h-100' src={couple_img_3} alt="" />
                            </div>
                            <div className='img_2010 pt-4 mx-sm-3 pe-5 pe-sm-0 pb-4'>
                                <img className='w-100 h-100' src={img_2010} alt="" />
                            </div>
                            <div className='girl_img_8 pt-5 ms-sm-5 pe-3'>
                                <img className='w-100 h-100' src={girl_img_8} alt="" />
                            </div>
                            <div className='girl_img_9 pe-3 pe-sm-0'>
                                <img className='w-100 h-100 mt-5' src={girl_img_9} alt="" />
                            </div>
                            <div className='drawing_a_crowd pt-sm-4 pt-5 mt-5 mt-sm-0 ms-sm-5 pe-3'>
                                <img className='w-100 h-100' src={drawing_a_crowd} alt="" />
                            </div>
                        </div>
                    </Col>
                </Row>
              </Container>
            </div>

        </div >
    )
}

export default Genesis